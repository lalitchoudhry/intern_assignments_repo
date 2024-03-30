import React from "react";

const TaskBox = ({ label, isComplete, date, time, deleteTask, toggleCompleteTask }) => {
  // STATES AND VARIABLE

  // FUNCTIONS

  // useEffects

  return (
    <div
      className={`${
        isComplete ? "bg-green" : "bg-white"
      } w-full flex  rounded-xl shadow-lg p-5 my-5 justify-between items-center relative`}
    >
      <div className="text-2xl flex gap-5">
        <i
          className={`${
            isComplete
              ? "bi bi-check2-circle text-white"
              : "bi bi-circle text-green"
          } text-2xl cursor-pointer`}
          onClick={()=>toggleCompleteTask(label)}
        ></i>
        <h5 className={`${isComplete ? "text-white" : ""} font-medium`}>
          {label}
        </h5>
      </div>
      <div className="cursor-pointer">
        <i className="bi bi-trash3-fill text-xl ml-2 text-gray" onClick={()=>deleteTask(label)}></i>
      </div>
      <div className="absolute right-5 bottom-0 text-xs text-dark-gray">
        {date} / {time}
      </div>
    </div>
  );
};

export default TaskBox;
