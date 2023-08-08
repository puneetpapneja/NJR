import React from 'react';
import Home from './components/Home';
import Aboutus from './components/About';
import Contactus from './components/Contact';
export const routes = [
    {
        path: "/",
        element:  <Home />
    },
    {
        path: "/about",
        element:  <Aboutus />
    },
    {
        path: "/contact",
        element:  <Contactus />
    }
]

