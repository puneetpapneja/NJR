import React from 'react';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import PageLayout from './pages/page-layout';
import Dashboard from './components/dashboard';
import Postpage from './pages/postpage';
import Appliedjob from './pages/appliedjobpage';
import Profile from './pages/profilepage';
import Postedjobpage from './pages/postedjobpage';
import Joblistpage from './pages/joblistpage';

export const routing = [
    {
        path: "/",
        element:  <Loginpage />
    },
    {
        path: "/register",
        element:  <Registerpage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/postjob",
        element: <Postpage />,
    },
    {
        path: "/appliedjob",
        element:<Appliedjob />
    },
    {
        path:"/profile",
        element:<Profile />
    },
    {
        path:"/postedjob",
        element:<Postedjobpage />
    },
    {
        path:"/joblist",
        element:<Joblistpage />
    }

]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]