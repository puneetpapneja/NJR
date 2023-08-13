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
        <Navbar.Brand href="#">login</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
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
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container fluid>
    <h2>Dashboard</h2>
    <Row>
        <Col>
          <div className='bg-danger w-30'>
            <h3 className='d-flex justify-content-between w-50  m-auto'>7</h3> 
            <p className='d-flex justify-content-between w-50 m-auto'>Applied Jobs</p>
            </div>
            </Col>
            <Col>
          <div className='bg-success w-30'>
            <h3  className='d-flex justify-content-between w-50 m-auto'>40</h3>
            <p  className='d-flex justify-content-between w-50 m-auto'>Total post</p>
            </div>
            </Col>
            <Col>
          <div className='bg-primary w-30'>
            <h3  className='d-flex justify-content-between w-50 m-auto'>2</h3>
            <p  className='d-flex justify-content-between w-50 m-auto'>Today's post</p>
            </div>
            </Col>
            </Row>
    </Container>
    </div>
  );
}

export default Dashboard;