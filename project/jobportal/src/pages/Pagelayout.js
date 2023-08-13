import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Pagelayout(){
    return( <Container >
                <NavBar />
                <Outlet />
                <Footer />
    </Container>)
}