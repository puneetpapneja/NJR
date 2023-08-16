import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const LoginPage = ({ handlePageChange, handleLogin }) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    handleLogin(loginForm.email, loginForm.password, setError);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="mb-3">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleLoginChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                required
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit">Submit</Button>
          </Form>
          <p className="mt-3">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary" onClick={handlePageChange}>
              Register
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
