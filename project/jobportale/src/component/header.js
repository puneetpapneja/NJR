import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
<<<<<<< HEAD
import{Link} from "react-router-dom"
export const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Post">Post Job</Nav.Link>
                        <Nav.Link as={Link} to="/Job">Applied Job</Nav.Link>
                        <Nav.Link href="#action2">Posted Job</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Link to="/Login">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
=======
import { Link } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
export const Header = () => {
    return (
        <><style>
             {`
    .btn-flat {
     border:none;
    }
    .dropdown-menu{
        padding:0%;
        margin:0%
    }
    .dropdown-item{
        padding:0%;
    }
    

    .dropdown-toggle::after {
      border-top:none;
      border-right:none;
      border-left:none;
      boder-bottom
    }
    `}

            
        </style>
        <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Post">Post Job</Nav.Link>
                            <Nav.Link as={Link} to="/Job">Job's</Nav.Link>
                            <Nav.Link as={Link} to="/Posted">Posted Job</Nav.Link>
                            <Nav.Link as={Link} to="/Applied">Applied Job</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search" />
                        </Form>
                        <Dropdown className='md-right'>
                            <Dropdown.Toggle variant="flat" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </Dropdown.Toggle>

                            <Dropdown.Menu >
                                <Dropdown.Item as={Link} to="/Profile"><strong><i class="bi bi-person-check"></i> Profile</strong></Dropdown.Item>
                                <Dropdown.Item href="#/action-2"><strong><i className="bi bi-box-arrow-right"></i>Log</strong></Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
    )
}