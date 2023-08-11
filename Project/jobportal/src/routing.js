import React from "react";
import Login from './components/Login';
import Register from './components/Register';

export const routing = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/Register",
        element: <Register/>
    }
]

