import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {  getSession } from "../utils";
import { useEffect } from "react";

export default function Pagelayout(){
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





