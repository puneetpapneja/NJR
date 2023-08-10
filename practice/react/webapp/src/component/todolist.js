import styles from './todolist.module.css';
import { useState } from "react";
const ToDoList = () =>{
    const [todoItem, setTodoItem] = useState([]);
    const [item, setItem]=useState();
    const handleClick = () =>{
        let mem=todoItem.includes(item);
        if(mem === true){
            alert("Already present in todolist");
            return;
        }
        else if(!item.length){
            alert("item is blank, please reinsert");
            return;
        }
        setTodoItem([...todoItem,item]);
    }
    const handleChange = (k)=>{
        let newtodoItem=todoItem.filter((i)=>i!==todoItem[k]);
       // console.log("a",newtodoItem);
        setTodoItem(newtodoItem);
        //console.log(todoItem);
    }
    const Change=(event)=>{
        setItem(event.target.value);
    }
    return (
        <div id={styles.outer}>
        <center><h1>To Do List :</h1>
        <input type="text" onChange={Change}/>
        <button onClick={handleClick}>Add</button></center>
        {
        todoItem?.map((i,j)=>
            <ol >
                <li className={styles.list}>{j+1}.{i}
                <button onClick={()=>handleChange(i)}>delete</button></li>
            </ol>
        )}
        </div>
    )
}

export default ToDoList;