import React from 'react';
import Appliedjobs from './components/Appliedjobs';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Menu from './components/Menu';
import Postjob from './components/Postjob';
import Register from './components/Register';
import PageLayout from './components/Pagelayout';
import Home from './components/Home';

export const routes =[
    {
        path: "/",
        element:  <Home />

    },
    {
        path: "/Post Job", 
        element:  <Postjob/>
    },
    {
        path: "/Applied Job",
        element:  <Appliedjobs/>
    },
    {
        path: "/Login",
        element:  <Login/>
    },
    {
        path: "/Dont have a account?Register Now",
        element:  <Register />
    },
]

