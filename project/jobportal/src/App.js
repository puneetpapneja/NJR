import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { getRoutes } from './routing';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import React from 'react';


    function App() {
      const hasRecruiter = useSelector(state => state?.user?.hasRecruiter);
        return (
          <React.Fragment>
          <RouterProvider router={createBrowserRouter(getRoutes(hasRecruiter))}>
       
       </RouterProvider> 
         </React.Fragment>
      
  );
}

export default App;