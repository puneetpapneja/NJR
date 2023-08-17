import './App.css';
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routing';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import Dashboard from './pages/Dashboard';
import PostJob from './pages/PostJob';
import appliedJobPage from './pages/appliedJobPage';
import Footer from './components/footer';
import Header from './components/Header';


function App() {
  return (
    // <LoginPage></LoginPage>
    // <RegisterPage></RegisterPage>
    // <Dashboard></Dashboard>
    // <PostJob></PostJob>
    <appliedJobPage></appliedJobPage>
    // <Header></Header>
    // <Footer></Footer>
    // <RouterProvider router={createBrowserRouter(routes)}>
    // </RouterProvider>
    );
}

export default App;
