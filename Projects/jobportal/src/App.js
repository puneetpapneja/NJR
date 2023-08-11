import './App.css';
import {routing} from './routing';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
function App() {
  return (
    <RouterProvider router={createBrowserRouter(routing)}>
    </RouterProvider>
  );
}

export default App;