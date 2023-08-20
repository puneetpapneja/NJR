import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {  getSession } from "../Utils";
import { useEffect } from "react";

export default function DashBoardPage(){
    const navigate = useNavigate();
    
    useEffect(()=> {
    if(!getSession())
       {
        console.log("test",getSession());
        navigate("/login");
       }
    },[navigate])
   
    return( <Container fluid>
               {getSession() ? <NavBar/> : null} 
                <Outlet />
               {getSession() ? <Footer/> : null} 
    </Container>)
    
}