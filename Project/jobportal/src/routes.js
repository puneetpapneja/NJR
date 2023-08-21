
import React from "react";
import Dashboard from "./components/dashboard"
import Login from "./components/Login";
import Register from "./components/register";
import Postjob from "./components/postjob";

import Appliedjob from "./components/appliedjob";
import Pagelayout from "./components/pagelayout";
import Postedjob from './components/postedjob';

export const routes=[
    {
        path:"/",
        element: <Dashboard />        
    },
    {
        path:"/Login",
        element: <Login />
    },
    {
        path:"/register",
        element: <Register />
    },
    {
        path:"/postjob",
        element: <Postjob/>
    },
    {
        path:"/appliedjob",
        element: <Appliedjob/>
    },
    {
        path: "/postedjob",
        element: <Postedjob/>
    }
    
]


export const routing = [
    {
        path:"/",
        element:<Pagelayout/>,
        children: routes
    }
]



