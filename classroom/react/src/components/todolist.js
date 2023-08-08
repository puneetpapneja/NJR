import { useState } from "react"

const ToDoList = () =>{
    const [todoItem, setTodoItem] = useState();
    const handleClick = (event) =>{
        console.log(event)
    }

    const handleChange = (event)=>{
        setTodoItem(event.target.value);
    }
    return (
        <div>
        <h1>To Do List : {todoItem}</h1>

        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default ToDoList;