import { Outlet } from "react-router-dom"
import React from 'react';
import NavBarcomponent from "./NavBarcomponent";

const Pagelayout = ()=>{
    return (
        <React.Fragment>
            <NavBarcomponent />
            <Outlet />
        </React.Fragment>
    )
}
export default Pagelayout;