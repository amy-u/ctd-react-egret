import React from "react";
import InputWithLabel from "./InputWithLabel";

function AddTodoForm({onAddTodo}) {
  const [todoTitle, setTodoTitle] = React.useState('');
  
  const handleTitleChange = (event) => {
    let newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    event.preventDefault();
  }

  const handleAddTodo = (event) => {
    // console.log(event.target.value);
    onAddTodo({title: todoTitle, id: Date.now()});
    event.preventDefault();
    // event.target.reset();
    setTodoTitle('');
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} label={"Title:"} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTodoForm;
