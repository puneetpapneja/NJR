import React from 'react';
import Loginpage from './Pages/loginPage';
import Registerpage from './Pages/registerpage';

export const routing = [
    {
        path: "/",
        element:  <Loginpage/>
    },
    {
        path: "/register",
        element:  <Registerpage />
    }
]