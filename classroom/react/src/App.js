import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
import Login from './components/Basicexample';


function App() {
  return (
    <>
    <Login/>
    <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider>);
    </>
}

export default App;
