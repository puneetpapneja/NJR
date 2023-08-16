import './App.css';
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import { routes } from './routing';


function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider>);
}

export default App;
