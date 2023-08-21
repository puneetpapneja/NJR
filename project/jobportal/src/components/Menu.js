import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BsFillEmojiSmileFill } from "react-icons/bs";
function Menu() 
{
  return (
    <div className='Menu'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft : "300px"}}>logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><div style={{marginLeft : "100px",display:"flex"}}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link  as={Link} to="/Postjob">PostJob</Nav.Link>
            <Nav.Link as={Link} to="/Appliedjob">AppliedJob </Nav.Link>
            <Nav.Link  as={Link}to="/Postedjob"> PostedJob</Nav.Link>
            </div>
          </Nav>
          <Form className="d-flex"  style={{marginRight:"50px",width:"300px"}}>
            <Form.Control
            style={{border:"solid 1px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <BsFillEmojiSmileFill style={{height:"40px",width:"50px",marginRight:"10px"}}/>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Menu;