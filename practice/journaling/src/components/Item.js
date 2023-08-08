// import ".App.js"
import "./item.css"



function Item({items}) { 
            return (

                <>
                {items?.map((item)=>{
                    
                    return <div id="Item1" >
                    <section className="product" >{item.product}</section>
                    <section className="company">{item.company}</section>
                    <section className="price">{item.price}</section>
                    </div>
                    
                    
                })}

                </>
                );




        
        
    
}
export function Shubham() {
    return (
        <p>
            My name is Shubham
        </p>
    )
}

export default Item;