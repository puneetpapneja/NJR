import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, selectRegistrationStatus, selectRegistrationError } from '../store/reducers/userSlice';

const RegisterPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [showCompany, setShowCompany] = useState(false);
  const dispatch = useDispatch();

  const registrationStatus = useSelector(selectRegistrationStatus);
  const registrationError = useSelector(selectRegistrationError);

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setSelectedRole(role);
    setShowCompany(role === 'Job Recruiter');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: "arjunpuri991@gmail.com",
      password: "arjun", 
      role: selectedRole,
      companyName: showCompany 
    };

    dispatch(registerUser(userData));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          {/* Other form fields */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {['Job Seeker', 'Job Recruiter'].map((role) => (
            <Form.Check
              key={role}
              inline
              label={role}
              name="role"
              type="radio"
              value={role}
              id={`inline-role-${role}`}
              onChange={handleRoleChange}
              checked={selectedRole === role}
            />
          ))}
          {showCompany && (
            <Form.Group controlId="formBasicCompany">
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name" />
            </Form.Group>
          )}
          {registrationStatus === 'error' && (
            <div className="text-danger">Registration failed: {registrationError}</div>
          )}
          {registrationStatus === 'success' && (
            <div className="text-success">
              Registration successful! <Link to="/LoginPage">Login</Link>
            </div>
          )}
          <Button variant="link">
            Have an account? <Link to="/LoginPage">Log in</Link>
          </Button>
          <Button variant="dark" type="submit" className="w-100">
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterPage;