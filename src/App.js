import React from "react";

import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
    );
    
    React.useEffect(() => {
      let stringTodoList = JSON.stringify(todoList);
      localStorage.setItem('savedTodoList', stringTodoList);
    }, [todoList]);
    
    const addTodo = (newTodo) => {
      setTodoList([...todoList, newTodo]);
    }
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
