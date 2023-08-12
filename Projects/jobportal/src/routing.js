import React from 'react';
import PageLayout from './components/PageLayout';
import Login from './components/Login';
import Memo1 from './components/Memo1'
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
export const routing = [
    {
        path: "/Login",
        element:  <Login/>
    },
    {
        path: "/Registration",
        element:  <Registration/>
    },
    {
        path: "/Memo",
        element: <Memo1/>
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