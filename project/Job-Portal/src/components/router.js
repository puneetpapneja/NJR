import React from "react";

import RegestrationForm from "./regestration";
import PageLayout from "./PageLayout";
import BodyBash from "./bodybash";
import PostAJob from "./PostAJob";
import AppliedJob from "./AppliedJob";
import Jobs from "./Jobs";
import PostedJob from "./PostedJob";
import Profile from "./Profile";



export const routes=[
   
    {
        path:"/",
        element: <BodyBash />
    },
    {
        path:"/registeration",
        element: <RegestrationForm/>
    }
    ,
    {
        path:"/post-a-job",
        element: <PostAJob/>
    },
    {
        path:"/Jobs",
        element: <Jobs/>
    },
    {
        path:"/Profile",
        element:<Profile/>
    },
    {
        path:"/Applied-Job",
        element: <AppliedJob/>
    },
    {
        path:"/Posted-Job",
        element:<PostedJob/>
    },
    
]

export const route = [
    {
        path:"/",
        element:<PageLayout/>,
        children:routes
    }
]