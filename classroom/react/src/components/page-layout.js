import { Outlet } from "react-router-dom";
import Header from "./Header";
// import { Route, Routes, Outlet } from "react-router";
import React from 'react';

const PageLayout = ()=>{
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    );
}

export default PageLayout;