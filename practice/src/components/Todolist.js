import React, { useState } from 'react';
import './Todolist.css';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '' || todoList.includes(newTodo)) {
      return; 
    }
    setTodoList([...todoList, newTodo]);
    setNewTodo('');
  };

  const deleteTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button  className="btn" onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todoList.length === 0 ? (
          <li>No list item found</li>
        ) : (
          todoList.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;
