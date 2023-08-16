import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';


function App() {
  return (
    // <LoginPage></LoginPage>
    <RegisterPage></RegisterPage>
    // <RouterProvider router={createBrowserRouter(routes)}>
    // </RouterProvider>
    );
}

export default App;
