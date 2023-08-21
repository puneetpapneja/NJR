import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/loginpage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/PageLayout";
import Post from "./pages/Post";
import { getSession } from "./utils";
import Jobs from "./pages/Jobspage";
import PostedJobs from "./pages/Postedpage";
import Appliedjob from "./pages/Appliedjobspage";
export const routes=[
    {
        path:"/",
        element: <Dashboard />        
    },
    {
        path:"/postjob",
        element: <Post />
    },
    {
        path:"/applyjob",
        element: <Jobs />
    },
    {
        path:"/postedjob",
        element:<PostedJobs/>
    },
    {
        path:"/appliedjob",
        element:<Appliedjob/>
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