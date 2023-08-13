import { Outlet } from "react-router-dom"
import Header from "./Header"
import React from 'react';

const PageLayout = ()=>{
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    )
}

export default PageLayout;