import React from "react";

const todoList = [
  { id: 1, title: "Write Lesson 1.1 instructions" },
  { id: 2, title: "Submit pull request" },
  { id: 3, title: "Respond to introduction email" },
];

function App() {
  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>

      <div>
        <ul>
          {todoList.map((item) => (
            <li key={item.id}> {item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
