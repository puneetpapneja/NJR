
import React from "react";
import Dashboard from "./components/dashboard"
import Login from "./components/login";
import Register from "./components/register";


export const routes=[
    {
        path:"/",
        element: <Dashboard />        
    },
    {
        path:"/login",
        element: <Login />
    },
    {
        path:"/register",
        element: <Register />
    }
    
]


