
import RegisterPage from './Page/RegisterPage';
import './App.css';
import LoginPage from './Page/LoginPage';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getRoutes, routes } from './routing';
import Dashboard from './Page/DashBoardPage';
import React from 'react';
import Footer from './components/Footer';
import Content from './components/Content';
import { Provider, useSelector } from 'react-redux';
import store from "./store/index"


function App() {
  const hasRecruiter = useSelector(state => state?.user?.hasRecruiter);
  return (
    <RouterProvider router={createBrowserRouter(getRoutes(hasRecruiter))}>
    </RouterProvider>
   )
}

export default App;