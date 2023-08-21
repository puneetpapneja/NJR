import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const LoginPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" minLength="8" required />
            <Form.Text muted>
              Password must be at least 8 characters long.
            </Form.Text>
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            <Link to="/Dashboard">Login</Link>
          </Button>
        </Form>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/RegisterPage">Sign up</Link>
        </p>
      </div>
    </Container>
  );
}

export default LoginPage;