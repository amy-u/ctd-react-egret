import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
  return (
    <>
      <label htmlFor={children}>{children}</label>
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
