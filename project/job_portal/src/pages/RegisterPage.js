import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const RegisterPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Register</h2>
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
          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Job Seeker"
            name="Job Seeker"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Job Recruiter"
            name="Job recruiter"
            type={type}
            id={`inline-${type}-2`}
          />
         
        </div>
      ))}

          <Button variant="primary" type="submit" className="w-100">
            Signup
          </Button>
          
        </Form>
        
         <p className='text-right'>
         Have an account? <a href=" ">Login Now</a>
         </p>
      </div>
    </Container>
  );
}

export default RegisterPage;