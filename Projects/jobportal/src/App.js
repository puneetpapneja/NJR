import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { routing } from './routes';
import React from 'react';
import { Provider } from "react-redux";
import store from './store/index';

import 'bootstrap/dist/css/bootstrap.min.css';

    function App() {
        return (
          <React.Fragment>
            <RouterProvider router={createBrowserRouter(routing)}>
       
       </RouterProvider> 
          </React.Fragment>
      
  );
}

export default App;