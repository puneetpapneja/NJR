import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
import Item from './components/Item';
import Memo from './components/Memo'; 
// import { Item } from 'react-bootstrap/lib/Breadcrumb';


function App() {
  return (
    <>
    

  <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider> 
    </>
    );
}

export default App;
