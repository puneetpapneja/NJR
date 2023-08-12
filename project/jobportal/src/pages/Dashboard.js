import { Container } from "react-bootstrap";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function Dashboard(){
    <Container className="position-relative">
                <NavBar className="position-absolute top-0 start-0"/>
                <Outlet className="position-absolute top-50 start-50 translate-middle"/>
                <Footer className="position-absolute bottom-0 end-0"/>
    </Container>
}