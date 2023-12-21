/* eslint-disable react/no-unescaped-entities */
import Form from "./Form";
import Table from "./Table";
import { useState } from "react";

function Container() {
    const [todoItems, setTodoItems] = useState([]);

    const handleRemove = (index) => {
        setTodoItems((prevState) => {
            const newArray = prevState.filter((item, i) => i !== index)
            return newArray
        })
  };

    const handleSubmit = (todoItem) => {
        const newArray = todoItems.concat(todoItem)
        setTodoItems(newArray)
    }

    return (
        <div className="container">
            <h1>Todo List</h1>
            <Form handleSubmit={handleSubmit} />
            <p>Here's what you are doing today.</p>
            <hr></hr>
            <Table todoListItems={todoItems} removeItem={handleRemove} />
        </div>
    );
}

export default Container;