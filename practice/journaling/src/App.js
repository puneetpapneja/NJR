import logo from './logo.svg';
import './App.css';
import Item, { Shubham } from "./components/Item"

// const body = document.getElementById("body");
// const p = document.createElement("p");
// p.innerHTML ="testing"
// body.append(p);

function App() {
  const ItemHead = [
    {
      product:"PRODUCT",
      company:"COMPANY",
      price:"PRICE"
     }
  ]

  const Items = [
    {
        product:"Bottle",
        company:"Cello",
        price:"25"
    },
    {
        product:"mobile",
        company:"IQ",
        price:"25K"
    },
    {
        product:"earth",
        company:"soler-system",
        price:"infinite"
    }
]


const Items2 = [
   
  {
      product:"Bottlaaaaaaaaaaa",
      company:"Cello",
      price:"25"
  },
  {
      product:"mobile",
      company:"IQ",
      price:"25K"
  },
  {
      product:"earth",
      company:"soler-system",
      price:"infinite"
  }
]
  return (
    <>
    <Item items={ItemHead}/>
    <Item items={Items}/>
    <Item items={Items2}/>
    
    {/* <Item/>
    <Item/> */}
    {/* <Item></Item> */}
    <Shubham/>
    </>
     
  );
}

export default App;
