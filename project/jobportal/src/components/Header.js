
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/dashboard'>Home</Nav.Link>
              <Nav.Link as={Link} to='/jobs'>Jobs</Nav.Link>
              <Nav.Link as={Link} to='/postjob'>Post A Job</Nav.Link>
              <Nav.Link as={Link} to='/appliedjobs'>Applied job</Nav.Link>
              <Nav.Link as={Link} to='/postedjobs'>Posted job</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
          alt="user-male-circle--v1"
        />
      </Navbar>
  );
}

export default Header;