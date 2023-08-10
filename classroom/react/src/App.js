import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Item from './components/Item';
=======
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
>>>>>>> 05ebde8791f651ead5cccd711d676e201d42d6e5


function App() {
<<<<<<< HEAD
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
=======
  return (
    <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider>);
>>>>>>> 05ebde8791f651ead5cccd711d676e201d42d6e5
}

export default App;
