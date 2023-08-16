import React from 'react';
import Home from './pages/Home';
import Postss from './pages/Postss';
import PageLayout from './pages/Pagelayout';
import AppliedJob from './pages/AppliedJob';
import PostJob from './pages/PostJob';
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