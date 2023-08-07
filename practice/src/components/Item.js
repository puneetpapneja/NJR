import './item.css';
const Item = ()=>{
    return (
        <div className="container">
            <div className="column">Bottle</div>
            <div className="column">Cello</div>
            <div className="column">115</div>
        </div>
     )
}

const items=[
        {
            item:"bottle",
            brand:"cello",
            price:"115",
    }
];
export default Item;