<<<<<<< HEAD
//import logo from './logo.svg';
import "./App.css";
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import { routes } from "./routing";

function App() {
  return (
    <>
      <RouterProvider router={createBrowserRouter(routes)}></RouterProvider>
    </>
  );
=======
import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getRoutes } from './routing';
import { useSelector } from 'react-redux';


function App() {
  const hasRecuriter = useSelector(state => state?.user?.hasRecuriter);
  return (
    <RouterProvider router={createBrowserRouter(getRoutes(hasRecuriter))}>
    </RouterProvider>);
>>>>>>> d8595ad42d20a4349d702758e3b0ae85f4b55dab
}

export default App;
