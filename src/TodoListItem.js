import React from "react";

const TodoListItem = (props) => {
  return (
    <div>
      <li id={props.id}> {props.todo}</li>
    </div>
  );
};

export default TodoListItem;
