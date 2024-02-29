import React, { useState } from "react";

function Input({ type, placeholder, name, value, handleChange }) {
  // STATES AND VARIABLES
  const [focused, setFocused] = useState(false);

  return (
    <>
    <div className="bg-white flex flex-col items-start justify-center p-2 border-grey border-2 w-full rounded-lg">
      <input
        className="focus:outline-none px-2 w-full"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        required
      />
    </div>
      </>
  );
}

export default Input;
