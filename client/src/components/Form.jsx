/* eslint-disable react/prop-types */
import IconButton from "./IconButton";
import { useState } from "react";

function Form(props) {
  const [todoItem, setTodoItem] = useState("");

  const handleButtonClick = (e) => {
    if (todoItem == "") {
      return;
    }
    e.preventDefault();
    props.handleSubmit(todoItem);
  };

  const handleChange = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <div className="input-container">
      <form>
        <input
          type="text"
          id="todoItem"
          name="todoItem"
          placeholder="What needs to be done?"
          value = {todoItem}
          onChange={handleChange}
        />
        <span className="submit-button">
          <IconButton icon="fa-plus" onClick={handleButtonClick} />
        </span>
      </form>
    </div>
  );
}

export default Form;
