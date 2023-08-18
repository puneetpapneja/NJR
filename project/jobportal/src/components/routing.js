import React from 'react';
import Appliedjobs from '.components/Appliedjobs';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Menu from './components/Menu';
import Postjob from './components/Postjob';
import Register from './components/Register';
import PageLayout from '.components/Pagelayout';

export const routing =[
    {
        path: "/",
        element:  <Login />
    },
    {
        path: "/Post A job",
        element:  <Postjob />
    },
    {
        path: "/Apllied job",
        element:  <Appliedjobs />
    },
    {
        path: "/Home",
        element:  <Dashboard />
    },
    {
        path: "/Login",
        element:  <Home/>
    },
    {
        path: "/Dont have a account?Register Now",
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