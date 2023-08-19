import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';


function Postjob() {
    return (
        <div className='Menu'>
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
        <Container>
        <Row className="justify-content-center">
              <Col xs={12} md={6}>
              <Card>
              <Card.Body>
              <Card.Title>
                <h1 className="">Post Job</h1>
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Job Description</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Max Salary</Form.Label>
                  <Form.Control type="number" placeholder="" />
                </Form.Group>

                <Button  style={{marginLeft:"250px"}} variant="dark" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
       
        
    );
}
export default Postjob;