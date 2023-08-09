import React, { useState } from 'react';
import './Item.css';
<<<<<<< HEAD
const Item = (props)=>{
    const {list: items } = props;
=======

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
>>>>>>> 05ebde8791f651ead5cccd711d676e201d42d6e5
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

            </table>
        </div>);
}

export default Item;