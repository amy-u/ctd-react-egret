import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({todoList, onRemoveTodo}) {
  return (
    <div>
      <ul>
        {todoList.map(item => 
          <TodoListItem key={item.id} {...item} onRemoveTodo={onRemoveTodo}/>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
