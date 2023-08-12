import React from 'react';
import Home from "./Home";
import About from './About';
import Contact from './Contact';
import PageLayout from './component/page-layout';
export const routing=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },{
        path:"/contact",
        element:<Contact/>
    }
]


export const routes = [
    {
        path: "/",
        element: <PageLayout />,
        children: routing
    }
]