// import logo from './logo.svg';
import './App.css';
import Item from "./component/Item";
const Items1=[{
  item: "tiffin",
  brand: "cello",
  price: 115
},
{
  item: "Bottle",
  brand: "cello",
  price: 115
},
{
  item: "Bottle",
  brand: "cello",
  price: 115
}
];
 



function App() {
  return (
    <div >
    <Item item="bottle" brand="cello" price={115}/>
    <Item item="tiffin" brand="cello" price={200}/>
    <Item list={Items1}/>
    
    </div>
  );
}

export default App;
