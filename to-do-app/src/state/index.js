import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  completedTasks: [],
  unCompletedTasks: [],
};

export const authSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.tasks = action.payload.tasks
    },
    setAddNewTask: (state, action) => {
        console.log("setAddTask: ", action);
        state.tasks = [...state.tasks, action.payload.task];
    },
    setCompleteTask: (state, action) => {
        console.log("setCompleteTask: ", action);
        const updatedTasks = state.tasks.map((task) => {
            if (task.label === action.payload.label) {
                task.isComplete = !task.isComplete
            }
            return task;
        });
        state.tasks = updatedTasks;
    },
    setDeleteTask: (state, action) => {
        console.log("setDeleteTask: ", action);
        const updatedTasks = state.tasks.filter((task) => task.label !== action.payload.task);
        state.tasks = updatedTasks;
    },
    setTaskByFilter: (state, action) => {
      if (action.payload.filter === "completed") {
        const updatedCompletedtasks = state.tasks.filter((task) => task.isComplete === true);
        state.completedTasks = updatedCompletedtasks;
      }
      else {
        const updatedCompletedtasks = state.tasks.filter((task) => task.isComplete !== true);
        state.unCompletedTasks = updatedCompletedtasks;
      }
    }
  },
});

export const { setTask, setAddNewTask, setCompleteTask, setDeleteTask, setTaskByFilter } = authSlice.actions;
export default authSlice.reducer;
