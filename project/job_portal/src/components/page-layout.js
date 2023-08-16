import { Outlet } from "react-router-dom"
//import Navbar from "./Navbar"
import Footer from "./footer";
import React from 'react';
//import { Navbar } from "react-bootstrap";

const PageLayout = ()=>{
    return (
        <React.Fragment>
            
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default PageLayout;