import React from "react";
import { Container, Nav, Navbar, Form, NavDropdown,Button,Row } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
// import person from "./resources/person-fill.svg";


// function Dashbord () {
//     return(
//         <header>
//             <Navbar expand="lg" className="bg-body-tertiary">
//             <Container fluid>
//                 <Navbar.Brand href="#home" className="me-4 ms-5">Logo</Navbar.Brand>
//                 <Offcanvas.Body>
//                 <Nav className="justify-content-between flex-grow-1 pe-5">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Post A Job</Nav.Link>
//                   <Nav.Link href="#action2">Applied A Job</Nav.Link>
//                   <Nav.Link href="#action2">Posted A Job</Nav.Link>
//                     <Form className="d-flex">
//                         <Form.Control
//                             type="search"
//                             placeholder="Search"
//                             className="me-2"
//                             aria-label="Search"
//                         />
//                         <Button variant="outline-success">Search</Button>
//                     </Form>
//                 </Nav>
//               </Offcanvas.Body>
//             </Container>
//         </Navbar>
//         </header>
        
        
        
//     )
// }
// export default Dashbord;

const personStyle = { height: "auto", width: "2.5%", marginLeft: "1.8vw" };
export default function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="Profile">
              Profile
            </Link>
            <Link className="nav-link" to="Jobs">
              Jobs
            </Link>
            <Link className="nav-link" to="/post-a-job">
              Post A Job
            </Link>
            <Link className="nav-link" to="/applied-job">
              Applied Job
            </Link>
            <Link className="nav-link" to="/posted-job">
              Posted Job
            </Link>
          </Nav>
          <Form className="d-flex">
          <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        {/* <img src={person} style={personStyle} /> */}
      </Container>
    </Navbar>
  );
}