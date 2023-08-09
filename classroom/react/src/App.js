import "./App.css";
import React, { useState } from "react";
import ToDoList from "./components/todolist";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import { routes } from "./routing";

// export const test = ()=>{

// }
// export const test1 = ()=>{

// }
// const body = document.getElementById("body");
// const p = document.createElement("p");
// p.innerHTML ="testing"
// body.append(p);

function App() {
  const [showHeader, setShowHeader] = useState(false);
  const items = [
    {
      item: "bottle",
      brand: "Cello",
      price: 115,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqltn9uF0LhbwC-y9BDD5yhNI1Lh4DkpX6A&usqp=CAU",
    },
    {
      item: "Mobile",
      brand: "Moto",
      price: 11500,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuDMpR_FMxIBANxGWnFVsnheoZv40IKjAvQ&usqp=CAU",
    },
    {
      item: "Iphone 5s",
      brand: "Iphone",
      price: 26000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMlRnalLvKNKpdmJxQqOYDCml5SoKkcq4g-g&usqp=CAU",
    },
  ];

  const items2 = [
    {
      item: "Polo",
      brand: "VW",
      price: 1100000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4n6lzmBoQRRGCjICBBU7g5m4FSl_rniwg&usqp=CAU",
    },
    {
      item: "i20",
      brand: "hyundai",
      price: 1200000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqltn9uF0LhbwC-y9BDD5yhNI1Lh4DkpX6A&usqp=CAU",
    },
    {
      item: "K10",
      brand: "Maruti Suzuki",
      price: 500000,
    },
  ];
  return (
    <React.Fragment>
      <button onClick={() => setShowHeader(!showHeader)}>unmount hooks</button>
      {showHeader ? null : <Hooks />}
      {/* <Card>
      <Item list={items} heading="Cermamic Products" />    
    </Card>


 <Card>
  <Item list={items2} heading="Cars" testContent="testContent" />
 </Card> */}
    </React.Fragment>

    // {/* <Item list={items} heading="Ceramic Products" /> */}
    //     {/* <button onClick={() => setShowHeader(!showHeader)}>click </button>
    //    {showHeader ? <Hooks /> : null}  */}
    //    {/* <ToDoList /> */}
    // // showHeader ? (<div className="App">
    // <Header />
    //   <Item list={items} heading="Ceramic Products" />
    //   <Item list={items2} heading="Cars" testContent="testContent" />
    // </div>): null
  );
}

export default App;
