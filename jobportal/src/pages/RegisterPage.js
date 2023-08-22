import React, { useState } from 'react';
import { Container, Form, Button,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [showCompany, setShowCompany] = useState(false);

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setSelectedRole(role);
    setShowCompany(role === 'Job Recruiter');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Register</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <br />

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            <br />
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
          <br></br>
          <Button variant="link">
          <Link to="/LoginPage">Have an account?Log in</Link>
          </Button>
          <Button variant="dark" type="submit" className="w-100">
            <Nav.Link as={Link} to="/LoginPage">Register</Nav.Link>
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default RegisterPage;