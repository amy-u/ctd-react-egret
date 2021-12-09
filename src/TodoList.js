import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todoList.map(item => 
          <TodoListItem key={item.id} todo={item.title}/>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
