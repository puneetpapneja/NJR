import React from 'react';
import Login from './components/login';
import  Dashboard from './components/dashboard';
import Register from './components/register';
import Postedjobs from './components/postjob';
import PageLayout from './components/pagelayout';
export const routing = [
    {
        path: "/dashboard",
        element:  <Dashboard />
    },
    {
        path: "/register",
        element:  <Register />
    },
    {
        path: "/Postedjobs",
        element:  <Postedjobs />
    }
]

export const routes = [
    {
        path: "/login",
        element: <PageLayout />,
        children: routing
    }
]

