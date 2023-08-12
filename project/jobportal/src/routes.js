import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/PageLayout";
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
    }
]
export const routing =[
    {
        path:"/",
        element:<Pagelayout />,
        children: routes
    }
]