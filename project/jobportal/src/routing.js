import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/Page-layout";
import Post from "./pages/Post";
import Applied from './pages/Appliedajob';
import Appliedjob from './pages/Appliedajob2';
import Posted from './pages/Postedajob';
import Profile from './pages/Profiles';
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
        path:"/Job",
        element: <Applied />
    },
    {
        path:"/register",
        element: <RegisterPage />
    },
    {
        path:"/PostJob",
        element: <Post />
    },
    {
        path:"/AppliedJob",
        element: <Appliedjob/>
    },
    {
        path:"/Posted",
        element: <Posted/>
    },
    {
        path:"/Profile",
        element: <Profile/>
    }
]
export const routing =[
    {
        path:"/",
        element:<Pagelayout />,
        children: routes
    }
]