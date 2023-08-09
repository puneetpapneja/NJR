import React from 'react';
import Home from "./Home";
import Aboutus from './About';
import Contactus from './Contact';
export const router=[
    {
        path:"/",
        element:<home/>
    },
    {
        path:"/about",
        element:<Aboutus/>
    },{
        path:"/contact",
        element:<Contactus/>
    }
]

