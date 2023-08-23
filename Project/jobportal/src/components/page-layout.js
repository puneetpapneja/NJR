import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomNavbar from "./navbar";
import Footer from "./footer";

export default function PageLayout() {
    const isAuthenticated = useSelector(state => state?.user?.isValidUser);

    return (
        <>
            {isAuthenticated && <CustomNavbar />}
            <Outlet />
            {isAuthenticated && <Footer />}
        </>
    );
}
