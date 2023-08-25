import React from 'react';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import PageLayout from './pages/page-layout';
import Dashboard from "./components/dashboard";
import Postpage from './pages/postpage';
import Appliedjob from './pages/appliedjobpage'
import Profile from './pages/profilepage';
import Postedjobpage from './pages/postedjobpage';
import Joblistpage from './pages/joblistpage';


export const commonRoute = [
    {
        path: "/dashboard",
        element:  <Dashboard />
    },
    {
        path: "/login",
        element:  <Loginpage />
    },
    {
        path: "/register",
        element:  <Registerpage />
    },
    {
        path:"/profile",
        element:<Profile />
    }
]

export const recruiterRoutes = [
    ...commonRoute,
    {
        path: "/postjob",
        element: <Postpage />,
    },
   

    {
        path:"/postedjob",
        element:<Postedjobpage />
    }
    


]

export const seekerRoutes=[
    ...commonRoute,
    {
        path: "/appliedjob",
        element:<Appliedjob />
    },
    {
        path:"/joblist",
        element:<Joblistpage />
    }

]

const getRoutes =(hasRecruiter)=> [
    {
        path: "/",
        element: <PageLayout />,
        children:hasRecruiter?recruiterRoutes:seekerRoutes
    }
]

export {getRoutes};