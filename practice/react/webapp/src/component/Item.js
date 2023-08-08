import "./item.css"
export default function Item({list}) {
    return (
        
        list?.map((item)=>{
            return(
            <div className="div_b">
            <section>{item.item}</section>
            <section>{item.brand}</section>
            <section id="price">{item.price}</section>
            </div>)})
        
    );
}