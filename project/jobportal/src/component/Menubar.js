import "../App.css";
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function  Menubar () {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const Navigate=useNavigate();
  function handleclick(){
    Navigate("/profile");
  } 
 
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid  className="mx-3">
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/Dashboard">Home</Nav.Link>
            <Nav.Link as={Link} to="/job">Job</Nav.Link>
            <Nav.Link  as={Link} to="/postajob">Post a Job</Nav.Link>
            <Nav.Link  as={Link} to="/appliedjob">Applied Job</Nav.Link>
            <Nav.Link  as={Link} to="/postedjob">Posted Job</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>

          
          <i class="bi bi-person-circle"  ref={target} onClick={() => setShow(!show)}></i>
              
         
          <Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
          <Nav.Link as={Link} to="/profile">profile</Nav.Link>
            <Nav.Link as={Link} to="/logout">logout</Nav.Link>
          </Tooltip>
        )}
      </Overlay>


  

    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Menubar;