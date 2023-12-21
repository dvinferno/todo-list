/* eslint-disable react/no-unescaped-entities */
import Form from "./Form";
import Table from "./Table";
import TodayDate from './TodayDate';
import { useState, useEffect  } from "react";

function Container() {
    const [todoItems, setTodoItems] = useState([]);

    const setCookie = (name, value, days) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    };

    const getCookie = (name) => {
        const cookieString = document.cookie.split('; ');
        for (const cookie of cookieString) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    };

    useEffect(() => {
        const storedItems = getCookie('todoListItems');
    
        if (storedItems) {
          setTodoItems(JSON.parse(storedItems));
        }
      }, []);

    const handleRemove = (index) => {
        setTodoItems((prevState) => {
            const newArray = prevState.filter((item, i) => i !== index);
            const data = JSON.stringify(newArray)
            setCookie('todoListItems', data, 7)

            return newArray;
        });
    };

    const handleSubmit = (todoItem) => {
        const newArray = todoItems.concat(todoItem);
        setTodoItems(newArray);

        const data = JSON.stringify(newArray)
        setCookie('todoListItems', data, 7)
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <TodayDate />
            <Form handleSubmit={handleSubmit} />
            <p>Here's what you are doing today.</p>
            <hr></hr>
            <Table todoListItems={todoItems} removeItem={handleRemove} />
        </div>
    );
}

export default Container;
