import './Item.css';
const Item = () => {
    return (
    <div className="flex-container">
        <div className= "column">Bottle</div>
        <div className= "column">Cello</div>
        <div className= "column"  >115</div>
    </div>
    )
}

const item = [
    {
    item : "Bottle",
    brand : "Cello",
    price : "115",
},
{
    item : "Tiffin",
    brand : "Cello",
    price : "109",
},
{
    item : "Bottle",
    brand : "Cello",
    price : "115",
},
{
    item : "Bottle",
    brand : "Cello",
    price : "115",
}
]


export default Item  