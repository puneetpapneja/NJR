import { useState } from "react";
import {Button} from 'react-bootstrap';

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
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        </div>
    )
}

export default ToDoList;