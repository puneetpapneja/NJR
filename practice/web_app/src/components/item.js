import item from "./item.css"

const Item = () =>{
    const Items = [
        {
            item : "Bottle",
            brand: "Cello" ,
            Price: 120,
            
        },
        {
            item : "Phone",
            brand: "MI" ,
            Price: 12000,
            
        }

    ]
    
    return(
        <>
        <h1>Item Component</h1>
        <div id="item_css">
            <h4>Bottle</h4>
            <h4>Cello</h4>
            <h4>115/-</h4>
            
        </div>
        
        </>

        
        
        
        
    )
    
}
export default Item;