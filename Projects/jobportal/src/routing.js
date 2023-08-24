import React from "react";
import Dashboard from "./pages/Dashboardpage"
import LoginPage from "./pages/Loginpage";
import RegisterPage from "./pages/registerpage";
import Pagelayout from "./components/Page-layout";
import Post from "./pages/Post";
import Appliedjob from './pages/Appliedjob';
import Applied from './pages/Appliedjob2';
import Posted from './pages/Postedajob';
import Profile from './pages/Profile';
import Appliedajob2 from "./components/Appliedjob2";
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
        element: <Appliedjob/>
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
        element: <Applied/>
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