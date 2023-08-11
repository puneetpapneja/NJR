import React from 'react';
import LoginPage from './pages/loginpage';
import Registrationpage from './pages/Registerationpage';
export const routing=[
    {
        path:'/',
        element:<LoginPage/>
    },
    {
        path:'/Registration',
        element:<Registrationpage/>
    },
]