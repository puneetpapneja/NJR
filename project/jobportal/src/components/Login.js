import { Container, Row, Form, Button, Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {

  return (
    <Container className="d-flex justify-content-sm-center">
      <Form className="w-25 p-1" >
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h1 className="d-flex justify-content-center">Login</h1>
         
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Text className="text-muted">
              <Card.Link as={Link} to="/registerpage">Don't have a account?Register Now</Card.Link>
            </Form.Text>
          </Form.Group>

          <div class=" mx-auto">
            <Button variant="dark" type="submit" class="btn btn-dark" as={Link} to="/dashboard">
              Login
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  )
}
export default Login;