
import React from "react";
import Dashboard from "./components/dashboard"
import Login from "./components/Login";
import Register from "./components/register";
import Postjob from "./components/postjob";
import Navbar from "./components/navbar";
import Appliedjob from "./components/appliedjob"

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
    }
    
]


export const routing =[
    {
        path:"/",
        element:<Navbar />,
        children: routes
    }
]



