import { Container, Nav, Navbar,Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
const NavBar = () =>{
    return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid>
        <Navbar.Brand href="#home" className="ms-3">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ms-3">
          <Nav className="ms-3">
            <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/Jobs" className="me-3">Jobs</Nav.Link>
            <Nav.Link as={Link} to="/Postjob">Post A Job</Nav.Link>
            <Nav.Link as={Link} to="/appliedjob">Applied Job</Nav.Link>
            <Nav.Link as={Link} to="/Postedjob">Posted Job</Nav.Link>
          
  
            <Nav.Link href="" className="me-3"><Form ><Form.Control type="text" placeholder="🔍search" /></Form></Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end me-3">
            <Nav>
            <Nav.Link href=""><i class="bi bi-person-circle fs-3"></i></Nav.Link>
          </Nav>
          <Dropdown>
                        <Dropdown.Toggle variant='primary' id='dropdown-icon' style={{ border: 'none', backgroundColor: 'transparent', color: 'black' }}>
                            
                        </Dropdown.Toggle>

                        <Dropdown.Menu align='end'>
                            <Dropdown.Item>
                                <Link to='/profile' style={{ color: 'black', textDecoration: 'none'}}>
                                    <i className='bi bi-person-plus'></i> Profile
                                </Link>
                            </Dropdown.Item>
                            {/* <Dropdown.Divider /> */}
                            <Dropdown.Item>
                                <i className='bi bi-box-arrow-right'></i> Logout
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar;
