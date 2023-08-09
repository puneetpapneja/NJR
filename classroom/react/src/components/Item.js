<<<<<<< HEAD
import { useState } from "react";
import "./Item.css";
const Item = ({ list: items, heading }) => {
  const [hasShow, setHasShow] = useState(true);

  const handleClick = () => {
    setHasShow(!hasShow);
    console.log("hasshow - ", hasShow);
  };
  return (
    <div>
      <h1>
        {heading} <button onClick={handleClick}> click </button>
      </h1>
      <table className={hasShow ? "show" : "hide"}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
=======
import React, { useState } from 'react';
import './Item.css';

const ListItems = React.memo(({items}) => {
    return items?.map(item => (
        <tr>
            <td>{item.item}</td>
            <td>{item.brand}</td>
            <td>{item.price}</td>
        </tr>
        ))
});

const Item = ({list: items, heading })=>{ 
    const [hasShow, setHasShow] = useState(true);  
    
    const handleClick = () => {
       setHasShow(!hasShow);
        console.log("hasshow - ", hasShow);
    }
    return (<div>
        <h1>{heading} <button onClick={handleClick}> click </button></h1>
            <table >
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Brand</th>
                    <th>Price</th>
                </tr>
                </thead>

                <tbody>
                    <ListItems items={items} />
                    
                </tbody>
>>>>>>> 05ebde8791f651ead5cccd711d676e201d42d6e5

        <tbody>
          {items?.map((item) => (
            <tr>
              <td>{item.item}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Item;
