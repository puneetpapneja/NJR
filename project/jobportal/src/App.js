
import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { routes } from './routing';
import React from 'react';


    function App() {
        return (
          <React.Fragment>
            <RouterProvider router={createBrowserRouter(routes)}>
       
       </RouterProvider> 
          </React.Fragment>
      
  );
}

export default App;