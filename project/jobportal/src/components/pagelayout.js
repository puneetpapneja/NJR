import { Outlet } from "react-router-dom"
import React from 'react';
import NavBarcomponent from "./NavBarComponent";
import Footercomponent from "./footer.js";

const Pagelayout = ()=>{
    return (
        <React.Fragment>
            <NavBarcomponent />
            <Outlet />
            <Footercomponent />
        </React.Fragment>
    )
}
export default Pagelayout;