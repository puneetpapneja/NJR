import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomNavbar from "./navbar";
import Footer from "./footer";

export default function PageLayout() {
    const location = useLocation();
    const isAuthenticated = useSelector(state => state?.user?.isValidUser);

    // Check if the current route is login or register
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";

    // Render navbar and footer only if not on login or register page and user is authenticated
    const shouldRenderNavbarFooter = !isLoginPage && !isRegisterPage && isAuthenticated;

        // If not authenticated and not on login or register page, redirect to login
        if (!isAuthenticated && !isLoginPage && !isRegisterPage) {
            return <Navigate to="/login" />;
        }

    return (
        <>
            {shouldRenderNavbarFooter && <CustomNavbar />}
            <Outlet />
            {shouldRenderNavbarFooter && <Footer />}
        </>
    );
}
