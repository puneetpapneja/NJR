// import "./App.css";
import React, { useState } from "react";
// import Slider from "./components/Slider";
import ToDoList from "./components/todolist";

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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjuDMpR_FMxIBANxGWnFVsnheoZv40IKjAvQ&usqp=CAU",
    },
  ];
  return <div className="App">{/* <ToDoList /> */}</div>;
}

export default App;
