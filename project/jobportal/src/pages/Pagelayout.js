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


// className="position-relative"
// className="position-absolute top-0 start-0"
// className="position-absolute top-50 start-50 translate-middle"
// className="position-absolute bottom-0 end-0"