import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  { id: 1, title: "Write Lesson 1.1 instructions" },
  { id: 2, title: "Submit pull request" },
  { id: 3, title: "Respond to introduction email" },
];

function TodoList() {
  return (
    <div>
      <ul>
        {todoList.map(item => 
          <TodoListItem key={item.id} todo={item.title}/>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
