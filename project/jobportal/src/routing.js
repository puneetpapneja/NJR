import React from "react";
import Dashboard from "./pages/Dashboard"
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import Pagelayout from "./components/Pagelayout";
import PostJob from "./pages/PostJob";
import appliedJobPage from "./pages/appliedJobPage";
export const routes=[
    {
        path:"/",
        element: <Dashboard />        
    },
    {
        path:"/login",
        element: <LoginPage />
    },
    {
        path:"/register",
        element: <RegisterPage />
    },
    {
        path:"/PostJob",
        element: <PostJob />
    },
    {
        path:"/appliedJobPage",
        element: <appliedJobPage />
    }
]
export const routing =[
    {
        path:"/",
        element:<Pagelayout />,
        children: routes
    }
]
