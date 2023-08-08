import { useEffect, useState } from "react";

const Hooks = ()=>{
    const [value, changeValue] = useState();
  useEffect(()=> {
    console.log("Load 1 time only when component load")
  },[])

 
  useEffect(()=> { 
    console.log("value state change")
  },[value]); 

  useEffect(()=> { 
    console.log("useEffect trigger everytime")
  });

  useEffect(()=> { 
   return () => {
    console.log("hooks component unload");
   }
  });

 
    return (
        <div>
            <h1>Hooks examples</h1>
            Value : {value}
            <button onClick={() => changeValue(Math.random())}>click here</button>
        </div>
    )
}


export default Hooks;