import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import {Link} from 'react-router-dom';
<Navbar bg="light" expand="lg">
<Navbar.Brand href="#" className='col-lg-4'>Logo</Navbar.Brand>
<Navbar.Toggle aria-controls="navbarNav" />
<Navbar.Collapse id="navbarNav">
  <Nav className="mr-auto ">
    <Nav.Link href="#" >Home</Nav.Link>
    <Nav.Link href="#">Post a Job</Nav.Link>
    <Nav.Link href="#">Applied Jobs</Nav.Link>
    <Nav.Link href="#">Posted Jobs</Nav.Link>
  </Nav>
  <Form inline>
    <FormControl type="search" placeholder="Search" className="mr-sm-2" />
    
  </Form>
  <Nav.Link href="#" className='col-xl-5'>
    <Image src="profile-icon.png" alt="Profile" />
  </Nav.Link>
</Navbar.Collapse>
</Navbar>