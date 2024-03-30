import React, { useState } from "react";

const AddTaskModel = ({toggleShowaAddModel, addNewTask}) => {
  // STATES AND VARIABLE
  const [taskInput, setTaskInput] = useState("");

  // FUNCTIONS
  const handleSubmit = (e) => {
    if (taskInput === ' ' || taskInput === '') {
      alert("please enter a value")
      return
    }
    e.preventDefault()
    addNewTask(taskInput);
    toggleShowaAddModel();
  };

  return (
    <div className="absolute top-10 left-0 lg:left-[35%] md:left-[25%] flex flex-col m-2 shadow-lg rounded-lg bg-blue z-10">
      <div className=" flex justify-center items-center p-10 ">
        <button className="absolute top-2 right-2 text-center font-black text-xl rounded-full px-2 bg-white hover:bg-gray shadow-lg"
            onClick={toggleShowaAddModel}
        >
          x
        </button>
        <p className="text-2xl text-white font-black">
          Add and Manage your daily Task
        </p>
      </div>
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col p-10 rounded-lg bg-white">
          <input
            value={taskInput}
            onChange={(e)=>setTaskInput(e.target.value)}
            type="text"
            placeholder="Add Your Task here..."
            name="task"
            id="task"
            className=" outline-none rounded-lg p-3 text-xl bg-light-gray"
          />
          <button
            className="bg-blue text-2xl text-white font-bold rounded-lg hover:outline hover:bg-white hover:text-blue shadow-lg my-10 p-2"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModel;
