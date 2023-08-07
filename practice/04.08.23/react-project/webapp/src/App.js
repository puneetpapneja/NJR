
import './App.css';
import Item from './component/Item';
const items =[
  {
      item:"Bottle"
      brand:"cello"
      price:115
  },
  {
      item:"Bottle"
      brand:"cello"
      price:115
  },
  {
      item:"Bottle"
      brand:"cello"
      price:115
  }
]
function App() {
  return (
    <div className="App">
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default App;
