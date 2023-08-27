import { useState } from "react";
var a=[];
export const Todolist = () => {
    const [todo, setTodo] = useState()
    let count = 0
    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleAdd = () => {
       a.push(todo);
        console.log(a)
    }
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button type="submit" onClick={handleAdd}>add</button>
        </div>
    );
}