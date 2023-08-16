import './App.css';
import { Container } from 'react-bootstrap';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './Routing';
import Dashboard from './components/Dashboard';
import React from 'react';
import Footer from './components/Footer';
import Content from './components/Content';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <>
   <Menu/>
   </>
   )
}

export default App;
