import "./items.css"
export default function Item({list}){
    return(
        list?.map((item) =>{
        return(<div class="center">
            <section class="set_width">{item.item}</section>
            <section class="set_width">{item.brand}</section>
            <section class="set_width">{item.price}</section>
        </div>)
        })
    );
}