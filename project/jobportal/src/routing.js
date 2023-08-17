import React from 'react';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/registerpage';
import PageLayout from './pages/page-layout';
import Boxcomponent from "./components/boxcomponent";
import Postpage from './pages/postpage';

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
        path: "/postjob",
        element: <Postpage />,
    }

]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]