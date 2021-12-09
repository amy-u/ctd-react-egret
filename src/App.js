import React from "react";

import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>Successfully added: "{newTodo}"</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
