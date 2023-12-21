import IconButton from "./IconButton";
function Form() {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button clicked!");
  };

  return (
    <div className="input-container">
      <form>
        <input
          type="text"
          id="todoItem"
          name="todoItem"
          placeholder="What needs to be done?"
        />
        <span className="submit-button">
          <IconButton icon="fa-plus" onClick={handleButtonClick} />
        </span>
      </form>
    </div>
  );
}

export default Form;
