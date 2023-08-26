import './App.css';
import Item from './components/Items';

const items1=[
  {
    item:"bottle",
    brand:"milton",
    price:"Rs.200"
  },
  {
    item:"tiffin",
    brand:"milton",
    price:"Rs.300"
  },
  {
    item:"bottle",
    brand:"tupperware",
    price:"Rs.250"
  }
  
]

function App() {
  return (
    <div>
      {/* <Item item="bottle" brand="tupperware" price="Rs.20"></Item> */}
      <Item list = {items1}></Item>
    </div>
  );
}

export default App;
