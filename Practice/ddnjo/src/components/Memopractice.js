import React, { useState } from 'react'
import Memocomponent from './Memocomponent';

export default function Memopractice() {
    const [counter, setcounter] = useState(0);
    const [todos, settodos] = useState(['dsd','lol']);
    const increament=()=>{
        setcounter((c)=>c+1);
    }
  return (
    <div>
        <Memocomponent prop={todos}/>
        <button onClick={increament}>
            click 
        </button>
        <h2>{counter}</h2>
    </div>
  )
}
