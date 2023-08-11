import React from 'react';
import PageLayout from './components/PageLayout';
import Login from './components/Login';
import Memo1 from './components/Memo1'
import Dashboard from './components/Dashboard';
import Todolist from './components/Todolist';
import Register from './components/Register';
export const routing = [
    {
        path: "/todolist",
        element:  <Todolist/>
    },
    {
        path: "/login",
        element:  <Login/>
    },
    {
        path: "/register",
        element:  <Register />
    },
    {
        path: "/memo",
        element:  <Memo1/>
    },
    {
        path: "/dashboard",
        element:  <Dashboard/>
    }

]
export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]
