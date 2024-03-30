import React, { useEffect, useState } from "react";

// STATE IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { setTask, setAddNewTask, setCompleteTask, setDeleteTask, setTaskByFilter } from "../state";

// COMPONENTS IMPORTS
import LeftSidebar from "../components/LeftSidebar";
import TaskBox from "../components/TaskBox";
import AddTaskModel from "../components/AddTaskModel";

const Home = () => {
  // STATES AND VARIABLE
  const allTasks = useSelector((state) => state.tasks);
  const completedTask = useSelector((state) => state.completedTasks)
  const unCompletedTask = useSelector((state) => state.unCompletedTasks)
  const [tasks, setTasks] = useState(allTasks);
  const [showAddModel, setShowAddModel] = useState(false);
  const dispatch = useDispatch();

  // FUNCTIONS
  const toggleShowAddModel = () => setShowAddModel(!showAddModel);

  const addNewTask = (value) => {
    const today = new Date();
    dispatch(
      setAddNewTask({
        task: {
          label: value,
          isComplete: false,
          date: `${today.getDate()} ${today.toLocaleDateString("en-US", {
            month: "long",
          })} ${today.getFullYear()}`,
          time: today.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          }),
        },
      })
    );
  };

  const deleteTask = (label) => {
    dispatch(
      setDeleteTask({
        task: label,
      })
    );
  };

  const toggleCompleteTask = (label) => {
    dispatch(
      setCompleteTask({
        label: label,
      })
    );
  };

  const filterTask = (filterType) => {
    if (filterType === "all") {
      setTasks(allTasks);
    }
    if (filterType === "completed") {
      dispatch(setTaskByFilter({filter: filterType}))
      setTasks(completedTask);
    }
    if (filterType === "unCompleted") {
      dispatch(setTaskByFilter({filter: filterType}))
      setTasks(unCompletedTask);
    }
  } 

  // useEffects
  useEffect(() => {
    if (completedTask.length > 0) {
      setTasks(completedTask)
      return
    }
  }, [completedTask]);
  
  useEffect(() => {
    if (unCompletedTask.length > 0) {
      setTasks(unCompletedTask)
      return
    }
  }, [unCompletedTask]);

  useEffect(() => {
    setTasks(allTasks)
    if (allTasks.length !== 0) localStorage.setItem('tasks-by-takai', JSON.stringify(allTasks))
    // localStorage.setItem('tasks-by-takai', JSON.stringify(allTasks))
    
  }, [allTasks])

  useEffect(() => {     //  ------- --------- ------- for fetch the data of groups
    let localTask = JSON.parse(localStorage.getItem('tasks-by-takai'));

    if (localTask !== null ) {
      dispatch(setTask({tasks: localTask || []}))
    }

  }, [])

  return (
    <div className={`w-full h-full flex flex-col bg-primary-blue `}>
      <div className="p-10 flex justify-center items-center flex-col">
        <h2 className="font-black md:text-5xl text-4xl text-white underline decoration-blue">
          Welcome to <span className="text-red">Takai</span> !
        </h2>
        <p className="text-lg text-white font-medium">A task managment app </p>
      </div>
      <div className={`bg-light-gray p-5 rounded-t-[50px] flex lg:flex-row flex-col h-full gap-5 ${showAddModel && "opacity-50"}`}>
        <LeftSidebar createNewTaskBtn={toggleShowAddModel} filterTask={filterTask}/>
        <section className=" rounded-3xl w-full gap-5 ">
          <div className="p-2 shadow-lg rounded-xl bg-red">
            <h3 className="text-2xl text-center font-bold  text-white">
              Manage your tasks here
            </h3>
          </div>
          <div className="">
            {(tasks !== undefined) ?
              tasks.map((task) => (
                <TaskBox
                  key={task.label}
                  {...task}
                  deleteTask={deleteTask}
                  toggleCompleteTask={toggleCompleteTask}
                />
              )) : <div className="text-2xl text-center flex items-center justify-center w-full h-1/2 font-bold my-10 text-blue">Please Add Your Task By clicking on Create New Task</div>}
          </div>
        </section>
      </div>
        {showAddModel && (
          <AddTaskModel
            toggleShowaAddModel={toggleShowAddModel}
            addNewTask={addNewTask}
          />
        )}
    </div>
  );
};

export default Home;
