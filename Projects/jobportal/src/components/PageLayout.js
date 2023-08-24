import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import { getSession } from "../utils/utils";
export default function Pagelayout(){
    if(!getSession())
    {
        return(
            <Outlet/>
        );
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