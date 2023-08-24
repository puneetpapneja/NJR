import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "./Navigationbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "./Footer";
import { getSession } from "../utils/utils";
export default function Pagelayout(){
    const navigate = useNavigate();
    useEffect(()=>{
    if(!getSession())
    {
        return(

            navigate("/login")
        );
    }},[navigate])
             return(
                <Container fluid className="px-0 mx-0">
                {getSession()?<Navigationbar />:null}
                <Outlet />
                {getSession()?<Footer />:null}
            </Container> 
        );
}