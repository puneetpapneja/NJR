
import RegisterPage from './Page/RegisterPage';
import './App.css';
import LoginPage from './Page/LoginPage';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
import DashBoardPage from './Page/DashBoardPage';
import React from 'react';
import Footer from './components/Footer';
import Content from './components/Content';


function App() {
  return (
    
   <RouterProvider router={createBrowserRouter(routes)}>
   </RouterProvider>
   
   )
}

export default App;