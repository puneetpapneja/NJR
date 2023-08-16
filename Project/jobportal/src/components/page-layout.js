import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
export default function PageLayout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}
