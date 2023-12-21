import IconButton from "./IconButton";
function Form() {
    const handleButtonClick = () => {
        // Add your button click logic here
        console.log('Button clicked!');
      };

  return (
    <form>
      <label htmlFor="todoItem">What needs to be done?</label>
      <input type="text" id="todoItem" name="todoItem" />
      <br />
      <br />
      <IconButton icon="fa-plus" onClick={handleButtonClick} />
    </form>
  );
}

export default Form;
