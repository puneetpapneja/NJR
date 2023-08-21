import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import React from 'react';

const PageLayout = ()=>{
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
        </React.Fragment>
    )
}

export default PageLayout;
