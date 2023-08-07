import logo from './logo.svg';
import './App.css';
import Item from './components/Item';

// export const test = ()=>{

// }
// export const test1 = ()=>{

// }
// const body = document.getElementById("body");
// const p = document.createElement("p");
// p.innerHTML ="testing"
// body.append(p);

function App() {
  const items = [
    {
        item: "bottle",
        brand: "Cello",
        price: 115
    },
    {
        item: "Mobile",
        brand: "Moto",
        price: 11500
    },
    {
        item: "Iphone 5s",
        brand: "Iphone",
        price: 26000
    }
  ]

  const items2 = [
    {
      item: "Polo",
      brand: "VW",
      price: 1100000
  },
  {
      item: "i20",
      brand: "hyundai",
      price: 1200000
  },
  {
      item: "K10",
      brand: "Maruti Suzuki",
      price: 500000
  }
  ]
  return (
    <div className="App">
      <Item list={items} />
      <Item list={items2} />
    </div>
  );
}

export default App;
