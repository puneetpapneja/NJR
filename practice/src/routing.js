import React from 'react';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import PageLayout from './component/Pagelayout';
export const routing = [
    {
        path: "/",
        element:  <Home />
    },
    {
        path: "/about",
        element:  <About />
    },
    {
        path: "/contact",
        element:  <Contact />
    }
]

export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]

