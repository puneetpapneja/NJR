import React from 'react';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/registerpage';
import PageLayout from './pages/page-layout';

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
        element: <PageLayout />,
    }

]