import { Container, Row, Form, Button, Alert } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import React from 'react';

const Register = ()=>{

return (
<Container className="d-flex justify-content-sm-center">
<Form className="w-25 p-1" >
<div className="shadow-sm p-3 mb-5 bg-white rounded">
  <h1 className="d-flex justify-content-center">Register</h1>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicRadio">
    {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Job Seekers"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Job Recruiters"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
     <Form.Text className="text-muted">
        <Card.Link as={Link} to="/">Have a account?Login Now</Card.Link>
     </Form.Text>
  </Form.Group>

  <div class=" mx-auto">
  <Button variant="dark" type="submit" class="btn btn-dark">
    Register
  </Button>
  </div>
  </div>
</Form>
</Container>
)
}


export default Register;