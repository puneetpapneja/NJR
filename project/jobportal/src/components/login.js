import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Login = ()=>{

return (
<Container className="form-container" >
  <Form className="form "> 
    <h1 className="form-title">Login</h1>
    <Row className='mb-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label><br/>
          <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
    </Row >
    <Row>
     <Form.Group className="mb-4" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label><br/>
       <Form.Control type="password" placeholder="Password" />
     </Form.Group>
    </Row> 
    <Row>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Text className="text-muted"> */}
          <Card.Link as={Link} to="/register">Don't have a account?Register Now</Card.Link>
        {/* </Form.Text> */}
      </Form.Group>
    </Row>
    <Row>
      <Button variant="primary" type="submit" className="btn">
        Login
      </Button>
    </Row>
  </Form>
</Container>
)
}
export default Login;