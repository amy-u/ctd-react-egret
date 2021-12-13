import React from "react";

const TodoListItem = ({ id, title, onRemoveTodo }) => {
  return (
    <div>
      <li>
        {title}
        <button type="button" onClick={() => onRemoveTodo(id)}>
          Remove
        </button>
      </li>
    </div>
  );
};

export default TodoListItem;
