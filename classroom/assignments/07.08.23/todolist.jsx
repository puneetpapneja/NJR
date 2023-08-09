import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit() {
    if (!inputValue) {
      return;
    } else {
      if (todoItems.find((ele) => ele === inputValue)) {
        alert("already added");
      } else {
        setTodoItems([...todoItems, inputValue]);
        setInputValue("");
      }
    }
  }

  function handleDelete(index) {
    const newArr = todoItems.filter((_, i) => i !== index);
    setTodoItems(newArr);
  }

  return (
    <div>
      <h1>Todo List:</h1>
      <input type="text" onChange={handleChange} value={inputValue} />
      <button onClick={handleSubmit}>Click me</button>
      <ul>
        {todoItems.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
