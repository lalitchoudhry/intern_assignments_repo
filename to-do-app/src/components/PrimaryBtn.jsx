import React from "react";

const PrimaryBtn = ({ label, handleClick }) => {
  return (
    <button
      className="w-full py-2 px-5 bg-primary-blue text-white font-semibold text-xl rounded-lg border-2 border-primary-blue hover:bg-white hover:text-primary-blue"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default PrimaryBtn;
