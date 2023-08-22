import React from 'react';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/registerpage';
import PageLayout from './pages/page-layout';
import Boxcomponent from "./components/boxcomponent";
import Postpage from './pages/postpage';
import Applied from './pages/Applledjob';
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
        element: <Boxcomponent />,
    },
    {
        path: "/postesjob",
        element: <Postpage />,
    },
    {
        path: "/appliedjob",
        element: <Applied />,
    },
    {
        path: "/postjob",
        element: <Postpage />,
    },

]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]