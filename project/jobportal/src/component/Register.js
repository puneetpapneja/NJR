import React  from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";



function Register(){
    const Navigate=useNavigate();
    function handleclick(){
      Navigate("/Dashboard"); }
    return (
        <Container className="login_page">
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Register</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Check
            inline
            label="Job seeker"
            name="group1"
            type="radio"
        
          />
          <Form.Check
            inline
            label="Job Recruiter"
            name="group1"
            type="radio"
            
          />
           <br/> <br/>  <a href="/">Have not log-in? Log-in now</a> <br/>  <br/> 

               
                <Button variant="primary" type="submit" onClick={handleclick} >
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
}

export default Register;