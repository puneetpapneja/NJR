import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';

function Dashboard() {
  return (
    <div className='Dashboard'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft : "300px"}}>login</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          ><div style={{marginLeft : "100px",display:"flex"}}>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Post A Job</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Applied Job
            </Nav.Link>
            <Nav.Link href="#">
              Posted Job
            </Nav.Link>
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
          </Form>
          <svg style={{marginRight:"100px"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid>
    <h2 style={{marginLeft: "130px",marginTop: "50px",fontSize:"50px"}}>Dashboard</h2>
    <Row>
        <Col>
            <div className='bg-danger w-30' style={{width : "200px", height:"150px",margin: "100px"}}>
            <h3 className='d-flex justify-content-between w-50  m-auto' style={{padding: "20px"}}>7</h3> 
            <p className='d-flex justify-content-between w-50 m-auto'>Applied Jobs</p>
            </div>
            </Col>
            <Col>
          <div className='bg-success w-30' style={{width : "200px", height:"150px",margin: "100px"}}>
            <h3  className='d-flex justify-content-between w-50 m-auto' style={{padding: "20px"}}>40</h3>
            <p  className='d-flex justify-content-between w-50 m-auto'>Total post</p>
            </div>
            </Col>
            <Col>
          <div className='bg-primary w-30' style={{width : "200px", height:"150px",margin: "100px"}}>
            <h3  className='d-flex justify-content-between w-50 m-auto' style={{padding: "20px"}}>2</h3>
            <p  className='d-flex justify-content-between w-50 m-auto'>Today's post</p>
            </div>
            </Col>
            </Row>
            <footer style={{backgroundColor:"black",height:"30px",marginTop:"100px"}}><p style={{color: "white",padding:"10px",textAlign:"center"}}>TM 2023 Techno India NJR Institute Of Technology-All Rights Reserved</p></footer>
    </Container>
    </div>
  );
}

export default Dashboard;