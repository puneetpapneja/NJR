import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <br/>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <br/>
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Login
          </Button>
          
        </Form>
        

        <p className="mt-3 text-center">Don't have an account?<Button variant="link">Sign up</Button></p>
      </div>
    </Container>
  );
}

export default LoginPage;
