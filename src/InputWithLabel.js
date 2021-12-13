import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange, label }) {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        onChange={handleTitleChange}
      ></input>
    </>
  );
}
export default InputWithLabel;
