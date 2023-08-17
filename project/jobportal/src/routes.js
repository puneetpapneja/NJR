import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/PageLayout";
import Post from "./pages/Post";
export const routes=[
    {
        path:"/",
        element: <Dashboard />        
    },
    {
        path:"/Login",
        element: <LoginPage />
    },
    {
        path:"/Registeration",
        element: <RegisterPage />
    },
    {
        path:"/PostJob",
        element: <Post />
    }
]
export const routing =[
    {
        path:"/",
        element:<Pagelayout />,
        children: routes
    }
]