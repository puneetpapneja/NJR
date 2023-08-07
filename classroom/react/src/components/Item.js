import { useState } from 'react';
import './Item.css';
const Item = ({list: items, heading })=>{   
    const [hasShow, setHasShow] = useState(true);
    const handleClick = () => {
        setHasShow(!hasShow);
    }

    console.log("hasShow -", hasShow);
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