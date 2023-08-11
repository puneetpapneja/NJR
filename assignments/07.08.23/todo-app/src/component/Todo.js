import React  from "react";
import { useRef, useState } from "react";

function Todo(){
    const userR = useRef(null);
    const arr1 = [];
    const [arr, setarr] = useState(arr1);
  
    function clear() {
      setarr([]);
    }
  
    function add() {
      const newValue = userR.current.value;
      setarr((prevArr) => [...prevArr, newValue]);
      userR.current.value = ""; // Clear the input field after adding
    }
  
    return (

      <div>
      
       <input ref={userR} type="text" placeholder="enter data to insert" />
        <button onClick={add}>add</button>
        
        {arr.map((ele, index) => (
          console.log(index);
          <h1 key={index}>{ele} <button onClick={clear}>clear</button></h1>
          
        ))}
       
        
        
      </div>
    );
  
}
export default Todo;





