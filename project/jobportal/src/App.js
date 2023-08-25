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
}

export default App;
