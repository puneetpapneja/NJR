import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import React from 'react';


function Postjob() {
    return (
        <div className='Menu'>
        <Container style={{marginTop:"40px"}}>
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
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <footer style={{backgroundColor:"black",height:"30px",marginTop:"100px"}}><p style={{color: "white",paddingTop:"4px",textAlign:"center"}}>TM 2023 Techno India NJR Institute Of Technology-All Rights Reserved</p></footer>
    </Container>
    </div>
       
        
    );
}
export default Postjob;