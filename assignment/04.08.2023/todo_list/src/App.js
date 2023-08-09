import "./App.css";
import Header from "./Components/header";
import { Todo } from "./Components/Todo";
import { Footer } from "./Components/Footer";
// import { Todos_item } from "./Components/Todo_item";
import { useEffect, useState } from "react";
import { Addtodo } from "./Components/Addtodo";

function App() {

  let init;

  if(localStorage.getItem("todo")===null){
    init = [];
  }
  else{
    init = JSON.parse(localStorage.getItem("todo"));
    console.log("WORKING!!!!!")
  }

  const Ondelete = (todoss) => {
    console.log("Ondelete of ", { todoss });

    settodo(todo.filter((e)=>{
        return e!==todoss;
    }))

    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const addtodo = (title, desc) => {
      console.log("Addtodo function is called")
      let sno;
      if(todo.length===0){
        sno = 0;
      }
      else{
        sno = todo[todo.length-1].sno + 1; 
      }
      const mytodo = {
        sno: sno,
        title: title,
        disc: desc,
      }
      settodo([...todo, mytodo]);
      // console.log(mytodo);
  }   

  const [todo, settodo] = useState([]);

  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todo));
    console.log("effect works")
  },[todo])
  return (
    <>
      {/* <h1>RAM RAM</h1>
    <p>My apk works</p> */}
      <Header titles="My_Title" search={false} />
      {/* <Todos_item/> */}
      <Addtodo addtodo = {addtodo}/>
      <Todo todos={todo} Ondelete={Ondelete} />
      <Footer />
    </>
  );
}

export default App;
