import './App.css';
import Item from './components/Item';

function App() {
  const items=[
    {
        item:"Bottle",
        brand:"cello",
        price:"115"
    },
    {
        item:"Bottle",
        brand:"Montex",
        price:"50"
    },
    {
        item:"Bottle",
        brand:"Milton",
        price:"300"
    },
    {
        item:"Bottle",
        brand:"Tupperware",
        price:"100"
    },
    {
        item:"Bottle",
        brand:"Bellon",
        price:"200"
    }
]
  return (
    <div className="App">
<Item items={items}></Item>
<Item></Item>
<Item></Item>
<Item></Item>
<Item></Item>
    </div>
  );
}

export default App;
