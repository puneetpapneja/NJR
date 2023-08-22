import Navigationbar from "./Navigationbar";
import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";
import Footer from "./footerbody";
import { getKey, getSession } from "../utils/utils";
import LoginPage from '../pages/loginpage';
import RegisterPage from "../pages/registerpage";
export default function Pagelayout(){
    if(!getSession())
    {
        if(getKey()=="login")
        return(<LoginPage />);
        else
        return(<RegisterPage />);
    }
    else
    {
             return(
                <Container fluid className="px-0 mx-0">
                <Navigationbar />
                <Outlet />
                <Footer />
            </Container> 
        );
    }
}