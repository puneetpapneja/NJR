import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Appliedjob from './pages/Appliedjob';

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
        path: "/Appliedjob",
        element:  < Appliedjob />
    }
   
]

export const routes = [
    {
      
        children: routing
    }
]


