import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer";
import React from 'react';
import Boxcomponent from "../components/boxcomponent";

const PageLayout = ()=>{
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}

export default PageLayout;