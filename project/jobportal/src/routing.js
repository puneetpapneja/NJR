import React from 'react';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import PageLayout from './pages/page-layout';
import Dashboard from './components/dashboard';
import Postpage from './pages/postpage';

export const routing = [
    {
        path: "/",
        element:  <Loginpage />
    },
    {
        path: "/register",
        element:  <Registerpage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/postjob",
        element: <Postpage />,
    }

]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]