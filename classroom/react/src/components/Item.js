import { useState } from 'react';
import './Item.css';
const Item = (props)=>{
    const {list: items } = props;
    return (<div>
        <h1>{heading} <button onClick={handleClick}> click </button></h1>
            <table className={hasShow ? 'show' : 'hide'}>
                <thead>
                <tr>
                    <th>Item</th>
                    <th>Brand</th>
                    <th>Price</th>
                </tr>
                </thead>

                <tbody>
                    {items?.map(item => (
                    <tr>
                        <td>{item.item}</td>
                        <td>{item.brand}</td>
                        <td>{item.price}</td>
                    </tr>
                    ))}
                    
                </tbody>

            </table>
        </div>);
}

export default Item;