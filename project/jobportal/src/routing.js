import React from 'react';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';

export const routing = [
    {
        path: "/",
        element:  <Loginpage />
    },
    {
        path: "/register",
        element:  <Registerpage />
    }
]