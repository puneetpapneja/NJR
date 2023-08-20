import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/PageLayout";
import Post from "./pages/Post";
import { getSession } from "./utils";
export const routes=[
    {
        path:"/",
        element: <Dashboard />        
    },
    {
        path:"/postjob",
        element: <Post />
    }
]
export const route = [
    {
    path:"/",
    element: <LoginPage />
},
{
    path:"/register",
    element: <RegisterPage />
}
]
let routing =[];
if(getSession())
{

    routing =[
        {
            path:"/",
            element:<Pagelayout />,
            children: routes
        }
    ]
}
else
{
    routing = [
        {
            path:"/",
            element:<Pagelayout />,
            children: route
        }
    ]
}
export {routing};