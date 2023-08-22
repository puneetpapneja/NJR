import logo from './logo.svg';
import './App.css';

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routing} from './routing';
function App() {
  return (
    

    <RouterProvider router={createBrowserRouter(routing)}>
    </RouterProvider>


  );
}

export default App;
