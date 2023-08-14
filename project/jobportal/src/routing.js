import React from 'react';
import Home from './components/pages/Home';
import Postss from './components/pages/Postss';
import PageLayout from './components/pages/Pagelayout';
import AppliedJob from './components/pages/AppliedJob';
import PostJob from './components/pages/PostJob';
// import { Route, Routes, Outlet } from "react-router";
export const routing=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/postss",
        element:<Postss/>
    },
    {
        path:"/AppliedJob",
        element:<AppliedJob/>
    },
    {
        path:"/PostJob",
        element:<PostJob/>
    }

]
export const routes=[
    {
        path: "/",
        element:<PageLayout/>,
        children: routing
    }
]