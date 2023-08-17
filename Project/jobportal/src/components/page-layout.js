import React from "react";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import CustomNavbar from "./navbar";
export default function PageLayout(){
    return(
        <>
            <CustomNavbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
