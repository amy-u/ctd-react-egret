import React from "react";

function AddTodoForm(props) {
  const [todoTitle, setTodoTitle] = React.useState('');
  
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    event.preventDefault();
  }

  const handleAddTodo = (event) => {
    // console.log(event.target.value);
    props.onAddTodo({title: todoTitle, id: Date.now()});
    event.preventDefault();
    // event.target.reset();
    setTodoTitle('');
  };

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
