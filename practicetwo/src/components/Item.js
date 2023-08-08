import './Item.css'
const Item = () => {
    return <div class="row1">
        <div class="col1"><h1>bottle</h1></div>
        <div class="col2"><h1>brand</h1></div>
        <div class="col3"><h1>400</h1></div>
    </div>
}
const Items = [
    {
         item :"bottle",
         brand : "apple",
         price : "400"
    }
]
export default Item;