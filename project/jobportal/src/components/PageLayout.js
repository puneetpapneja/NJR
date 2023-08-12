import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { getSession } from "../utils";
import Login from "./Login";
import LoginPage from "../pages/loginpage";
export default function Pagelayout(){
    if(getSession()=="log in")
    {
        return(<LoginPage />);
    }
    if(getSession()=="register")
    {
        return(<LoginPage />);
    }
    return(
       <Container fluid className="px-0 mx-0">
            <Navigationbar />
            <Outlet />
            <Footer />
       </Container> 
    );
}