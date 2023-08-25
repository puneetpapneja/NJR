import { Outlet, useNavigate } from "react-router-dom"
import Header from "./header"
import Footer from "./footer";
import React, { useEffect } from 'react';
import { getSession } from "../utils/utils";
import loginpage from "./loginpage";
import Navigationbar from "../components/navbar";
import { Container } from "react-bootstrap";


const PageLayout = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(!getSession())
        {
            return(
                <Outlet/>,
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








export default PageLayout;