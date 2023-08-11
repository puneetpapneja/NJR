import React ,{ useState } from 'react';
import './items.css';

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

            </table>
        </div>);
}
// const Item =()=>{
//     return(
//         <React.Fragment>
            
//         <div className="col" ><div className="col1">
//         Bottle
//     </div><div  className="col1">
//             cello
//         </div><div className="col1"> 115</div></div>
//     {/* <h1>Item component</h1> */}
//     {/* const items = [
//         {
//           Item :"Bottle",
//           brand: "Cello",
//           price:155
//         },
//         {
//             item:"Bottle",
//             brand: "Cello",
//             price:155

//         },
//          {
//           Item:"Bottle",
//           brand: "Cello",
//           price:155
//         },
//         ] */}
//     </React.Fragment>
//     )
   

    
export default Item;