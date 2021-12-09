import React from "react";

function AddTodoForm(props) {
  const handleAddTodo = (event) => {
    console.log(event.target.value);
    props.onAddTodo(event.target.value);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">
          Title:
        </label>
        <input id="todoTitle" type="text" onChange={handleAddTodo}></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
