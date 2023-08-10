import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import prac1 from './components/ass1';


function App() {
  const items=[
    {
        item:"Bottle",
        brand:"cello",
        price:50
    },
    {
        item:"Bottle",
        brand:"eva",
        price:100
    },
    {
        item:"Bottle",
        brand:"milton",
        price:115
    },
    {
        item:"Bottle",
        brand:"hello",
        price:105
    }
]
  return (
    <div className="App">
      <Item list={items}></Item>
      <Item ></Item>
      <Item></Item>
      <Item></Item>
    </div>
  );
}




export default App;
