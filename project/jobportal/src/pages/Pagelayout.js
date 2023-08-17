import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import {  getSession } from "../utils";
import LoginPage from "./loginPage";
import Registerpage from "./Registerpage";
export default function Pagelayout(){
    
    if(!getSession())
    {
        // console.log(getSession());
        return(<LoginPage/>);
    }
    else if(getSession()==="Register"){
        console.log(getSession());
        return(<Registerpage/>);
    }
    else{
        // console.log(getSession());
    return( <Container fluid>
                <NavBar/>
                <Outlet />
                <Footer />
    </Container>)
    }
}





