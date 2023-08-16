import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

const RegisterPage = ({ handlePageChange, handleRegister }) => {
  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    userType: 'jobSeeker',
    companyName: '',
  });

  const [error, setError] = useState('');

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    handleRegister(registerForm, setError);
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h2 className="mb-3">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="registerEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={registerForm.email}
                onChange={handleRegisterChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="registerPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleRegisterChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="userType">
              <Form.Label>User Type:</Form.Label>
              <Form.Check
                type="radio"
                label="Job Seeker"
                name="userType"
                value="jobSeeker"
                checked={registerForm.userType === 'jobSeeker'}
                onChange={handleRegisterChange}
                required
              />
              <Form.Check
                type="radio"
                label="Job Recruiter"
                name="userType"
                value="jobRecruiter"
                checked={registerForm.userType === 'jobRecruiter'}
                onChange={handleRegisterChange}
                required
              />
            </Form.Group>
            {registerForm.userType === 'jobRecruiter' && (
              <Form.Group controlId="companyName">
                <Form.Label>Company Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  value={registerForm.companyName}
                  onChange={handleRegisterChange}
                  required
                />
              </Form.Group>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
            <Button type="submit">Submit</Button>
          </Form>
          <p className="mt-3">
            Already have an account?{' '}
            <Link to="/" className="text-primary" onClick={handlePageChange}>
              Login
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
