import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/Page-layout";
import Post from "./pages/Post";
import Applied from "./components/Appliedjob";
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
    },
    {
        path:"/AppliedJob",
        element: <Applied />
    }
]
export const routing =[
    {
        path:"/",
        element:<Pagelayout />,
        children: routes
    }
]