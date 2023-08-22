import React from "react";
import LoginPage from "./pages/loginPage";
import Dashboard from "./pages/DashboardPage"
import RegisterPage from "./pages/registerPage";
import Pagelayout from "./components/pagelayout";
import { getSession } from "./utils";
import Post from "./pages/PostjobPage";
import Jobs from "./pages/ApplyjobPage";
import Applied from "./pages/AppliedPage";
import Posted from "./components/postedjob";
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
        path:"/appliedjob",
        element: <Applied />
    },
    {
        path:"/postedjob",
        element: <Posted />
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


// import React from 'react';
// import Login from './components/login';
// import  Dashboard from './components/dashboard';
// import Register from './components/register';
// import Postedjobs from './components/postjob';
// import AppliedJob from './components/applyjob';
// import PageLayout from './components/pagelayout';


// export const routing = [
//     {
//         path: "/dashboard",
//         element:  <Dashboard />
//     },
//     {
//         path: "/register",
//         element:  <Register />
//     },
//     {
//         path: "/Postedjobs",
//         element:  <Postedjobs />
//     },
//     {
//         path: "/",
//         element:  <Login />
//     }
// ]

// export const routes = [
//     {
//         path: "/",
//         element: <PageLayout />,
//         children: routing
//     }
// ]

