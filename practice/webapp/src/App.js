// import logo from './logo.svg';
import './App.css';
import React from 'react';

// import Item from './components/Item';
// import prac1 from './components/ass1';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { routes } from './routing';


function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider>
  );
}




export default App;
