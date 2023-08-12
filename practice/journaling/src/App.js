import logo from './logo.svg';
import './App.css';
import Item, { Shubham } from "./components/Item"
import Card from './components/Card';
import FormGroupExample from './login';
import RegestrationForm from './components/regestration';


// const body = document.getElementById("body");
// const p = document.createElement("p");
// p.innerHTML ="testing"
// body.append(p);

function App() {
//   const ItemHead = [
//     {
//       product:"PRODUCT",
//       company:"COMPANY",
//       price:"PRICE"
//      }
//   ]

//   const Items = [
//     {
//         product:"Bottle",
//         company:"Cello",
//         price:"25"
//     },
//     {
//         product:"mobile",
//         company:"IQ",
//         price:"25K"
//     },
//     {
//         product:"earth",
//         company:"soler-system",
//         price:"infinite"
//     }
// ]


// const Items2 = [
   
//   {
//       product:"Bottlaaaaaaaaaaa",
//       company:"Cello",
//       price:"25"
//   },
//   {
//       product:"mobile",
//       company:"IQ",
//       price:"25K"
//   },
//   {
//       product:"earth",
//       company:"soler-system",
//       price:"infinite"
//   }
// ]
  return (
    <>
    {/* <Card/> */}
      {/* <LoginPage/>
      <FormTextExampl/> */}
      {/* <FormGroupExample/> */}
      <RegestrationForm />
    </>
     
  );
} 

export default App;
