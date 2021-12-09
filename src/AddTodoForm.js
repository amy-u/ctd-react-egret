import React from "react";

function AddTodoForm(props) {
  
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    event.preventDefault();
  }

  const handleAddTodo = (event) => {
    // console.log(event.target.value);
    props.onAddTodo(todoTitle);
    event.preventDefault();
  };
  const [todoTitle, setTodoTitle] = React.useState('');

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">
          Title:
        </label>
        <input id="todoTitle" type="text" value={todoTitle} onChange={handleTitleChange}></input>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
