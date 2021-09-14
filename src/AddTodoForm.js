import React from "react";

function AddTodoForm () {
    return (
        <div>
            <form>
                <label htmlFor="todoTitle">Title:</label>
                <input id="todoTitle" type="text"></input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;