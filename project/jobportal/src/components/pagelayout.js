import { Outlet } from "react-router-dom"
import React from 'react';
import NavBarComponent from "./navbar";
import Footercomponent from "./footer.js";

const PageLayout = ()=>{
    return (
        <React.Fragment>
            <NavBarComponent />
            <Outlet />
            <Footercomponent />
        </React.Fragment>
    )
}

export default PageLayout;