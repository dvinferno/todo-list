/* eslint-disable react/no-unescaped-entities */
import Form from "./Form";
import Table from "./Table";

function Container() {
    return (
        <div className="container">
            <h1>Todo List</h1>
            <Form />
            <p>Here's what you are doing today.</p>
            <hr></hr>
            <Table />
        </div>
    );
}

export default Container;