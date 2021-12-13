import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange }) {
  return (
    <>
      <label htmlFor="todoTitle">Title:</label>
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
