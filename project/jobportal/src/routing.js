import React from 'react';
import Appliedjobs from './components/Appliedjobs';
import Dashboard from './components/Dashboard';
import Postjob from './components/Postjob';
import Header from './components/Header';
import PageLayout from './components/Pagelayout';
import Menu from './components/Menu';
import Postedjob from './components/Postedjob';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';


export const routing = [
    {
        path: "/",
        element:  <Dashboard />
    },
    {
        path: "/AppliedJob",
        element:  <Appliedjobs />
    },
    {
        path: "/PostJob",
        element:  <Postjob />
    },
    {
        path: "/PostedJob",
        element:  <Postedjob />
    },
    {
        path: "/Login",
        element:  <Login />
    },
    {
        path: "/Profile",
        element:  <Profile />
    },
    {
        path: "/Register",
        element:  <Register />
    },
    
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]
