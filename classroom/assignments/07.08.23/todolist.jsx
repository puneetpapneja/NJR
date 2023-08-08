import { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItem, settodoItem] = useState([]);
  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit() {
    if (!inputValue) {
      return;
    } else {
      settodoItem([...todoItem, inputValue]);
      setInputValue("");
    }
  }
  return (
    <div>
      <h1>Todo List:</h1>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleSubmit}>Click me</button>
      {todoItem.map((items) => (
        <li>{items}</li>
      ))}
    </div>
  );
};

export default ToDoList;
