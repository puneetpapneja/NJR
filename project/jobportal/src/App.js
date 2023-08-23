import Registerpage from './pages/Registerpage';
import './App.css';
import LoginPage from './pages/loginPage';
import { Container } from 'react-bootstrap';
import NavBar from './components/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
import Dashboard from './pages/Pagelayout';
import React from 'react';
import Footer from './components/Footer';
import Content from './components/Content';
import { Provider } from 'react-redux';
import store from "./store/index"


function App() {
  return (
    <Provider store={store}>
    <RouterProvider router={createBrowserRouter(routes)}>
    </RouterProvider>
    </Provider>
   )
}

export default App;
