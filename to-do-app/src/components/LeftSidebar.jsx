import React from "react";

// CONSTANTS IMPORTS
import { FILTER_TASK } from "../constants";

// COMPONENTS IMPORTS
import PrimaryBtn from "./PrimaryBtn";

const LeftSidebar = ({ createNewTaskBtn, filterTask }) => {
  return (
    <div className="bg-white shadow-lg lg:w-1/4 flex flex-col items-center rounded-3xl p-5">
      <div className="w-full mb-5">
        <PrimaryBtn label="+ Create New Task" handleClick={createNewTaskBtn} />
      </div>
      <ul className="w-full flex lg:flex-col flex-row items-center justify-between lg:divide-y-2 lg:divide-gray list-inside">
        {FILTER_TASK.map((item) => {
          return (
            <li
              key={item.label}
              onClick={()=>filterTask(item.value)}
              className="w-full flex items-center p-2 lg:p-5 rounded-lg md:text-xl text-sm font-medium hover:bg-gray text-dark-gray cursor-pointer gap-2"
            >
              <i className={`${item.imgUrl} text-green lg:text-2xl text-lg`}></i>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
