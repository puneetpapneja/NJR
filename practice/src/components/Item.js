 import styles from "./Item.css"
const Item =()=>{
    const items = [
        {
            item: "bottle",
            brand: "Cello",
            price: 115
        },
        {
            item: "Mobile",
            brand: "Moto",
            price: 11500
        },
        {
            item: "Iphone 5s",
            brand: "Iphone",
            price: 26000
        }
    ]
    return(
        <>

<div>
            <table>
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
        </div>
        </>
    )
}

export default Item