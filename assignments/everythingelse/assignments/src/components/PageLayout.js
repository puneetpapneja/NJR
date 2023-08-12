import { Outlet } from "react-router-dom";
import React from "react";
import  Header from "./Header"

export default function PageLayout(){
    return(
    <React.Fragment>
        <Header />
        <Outlet />
    </React.Fragment>
    )
}