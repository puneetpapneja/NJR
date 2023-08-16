import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./login.css"
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div className="login">
        <div className="child">
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit" className='button'>
        Submit
      </Button>
      <Link as={Link}to="/Registration">Registration</Link>
    </Form>
        </div>
    </div>
  )
}
