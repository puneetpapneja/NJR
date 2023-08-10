import './App.css';
<<<<<<< HEAD
import React, { useState } from 'react';
import ToDoList from './components/ToDoList';
import Header from './components/Header';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
=======
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
>>>>>>> 05ebde8791f651ead5cccd711d676e201d42d6e5
import { routes } from './routing';


function App() {
  return (
    <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider>);
}

export default App;
