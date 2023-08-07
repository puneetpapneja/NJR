
// const Item = ()=>{
//         return (<div>item component</div>)

// }
// export default Item;
// const Item =()=>{
//     return{<div>
//                 <table>
//                     <thead>
//                     <tr>
//                         <th>Item</th>
//                         <th>Brand</th>
//                         <th>Price</th>
//                     </tr>
//                     </thead>

//                    <tbody>
//                    <tr>
//                         <td>Bottle</td>
//                         <td>Cello</td>
//                         <td>115</td>
//                    </tr></tbody> 
//                 </table>}
//                 </div>
// }
import './item.css';
const Item =()=>{
    const items = [
        {
            item:"Bottle",
            brand: "cello" ,
            price :  200
        },
        {
            item:"Mobile",
            brand: "Moto" ,
            price :  15000
        },
        {
            item:"Iphone 5s",
            brand: "Iphone" ,
            price :  2600
        },
        
    ]
    return <div>
        <table>
            <thead>
                
            </thead>
        </table>
    </div>
}