import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { routing } from './routing';
import React from 'react';


    function App() {
        return (
          <React.Fragment>
            <RouterProvider router={createBrowserRouter(routing)}>
       
       </RouterProvider> 
          </React.Fragment>
      
  );
}

export default App;