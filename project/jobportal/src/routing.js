import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

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
    }
   
]

export const routes = [
    {
      
        children: routing
    }
]


