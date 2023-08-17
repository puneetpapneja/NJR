import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { routes } from './routing';
import React from 'react';



    function App() {
        return (
          <>
            <RouterProvider router={createBrowserRouter(routes)}>
            </RouterProvider> 
          </>  
          
        );
    }

export default App;