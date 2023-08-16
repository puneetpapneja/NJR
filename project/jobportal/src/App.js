import './App.css';
//import Loginpage from './pages/Loginpage';
//import Registerpage from './pages/Registerpage';
import Registerpage from './pages/Registerpage';
import './App.css';
import Loginpage from './pages/Loginpage';
import { Container } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './Routing';
import Dashboard from './components/Dashboard';
import React from 'react';
import Footer from './components/Footer';
import Content from './components/Content';
import Menu from './components/Menu'


function App() {
  return (
   <Menu/>
   )
}

export default App;
