import React from "react";

function InputWithLabel({ todoTitle, handleTitleChange, children }) {
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    })

  return (
    <>
      <label htmlFor={children}>{children}</label>
      <input
        id="todoTitle"
        type="text"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      ></input>
    </>
  );
}
export default InputWithLabel;
