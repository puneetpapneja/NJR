import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { route } from './components/router';





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

      {/* <LoginPage/> */}

      {/* <FormGroupExample/> */}


       {/* <RegestrationForm/>   */}
       
      {/* <Dashbord/> 
       <BodyBash/> 
       <FooterBash/>  */}

      {/* <Dashbord/> 
      <BodyPost/>
      <FooterPost/>   */}

      {/* <Jobs/>  */}
      <RouterProvider router={createBrowserRouter(route)}></RouterProvider>

    </>
     
  );
} 

export default App;
