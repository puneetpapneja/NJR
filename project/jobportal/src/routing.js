import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/Page-layout";
import Post from "./pages/Post";
import Jobs from "./pages/Appliedajob";
import PostedJobs from "./pages/Postedajob";
import Appliedjob from "./pages/Appliedajob2";
import Profile from "./pages/Profiles";
export const commonRoutes = [
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
    }
]
export const recruiterRoutes=[
    ...commonRoutes,
    {
        path:"/postjob",
        element: <Post />
    },
    {
        path:"/postedjob",
        element:<PostedJobs/>
    }
]
export const seekerRoutes =[
    ...commonRoutes,
    {
        path:"/Job",
        element: <Jobs />
    },
    {
        path:"/appliedjob",
        element:<Appliedjob/>
    },
    {
        path:"/Profile",
        element: <Profile/>
    }
]

const getRoutes =(hasRecruiter)=>[
    {
        path:"/",
        element:<Pagelayout />,
        children: hasRecruiter?recruiterRoutes:seekerRoutes
    }
]
export {getRoutes};