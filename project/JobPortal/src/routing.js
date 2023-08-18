import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';
import Pagelayout from './components/pagelayout';
import PostJob from './pages/Postjob';


export const routing = [
    {
        path: "/",
        element:  <LoginPage />
    },
    {
        path: "/LoginPage",
        element:  <LoginPage />
    },
    {
        path: "/RegisterPage",
        element:  <RegisterPage />
    },
    {
        path: "/Dashboard",
        element:  <Dashboard />
    },
    {
        path: "/Jobs",
        element:  < Jobs />
    },
    {
        path: "/Postjob",
        element:  < PostJob />
    }
    
   
]

export const routes = [
    {
        path: "/",
        element: <Pagelayout/>,
        children: routing
    }
]


