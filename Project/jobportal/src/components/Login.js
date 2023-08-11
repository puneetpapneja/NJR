import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
    
    <Form className="form">
     <h1>Login Page</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="input" type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="input" type="password" placeholder="Password" />
      </Form.Group>

      
     
      <div className='arun'>
      <Link to="/Register">Don't have a account?Register Now</Link>
       
      <Button  className="btn" variant="primary" type="submit">Login</Button>
      </div>
    </Form>
    </>
  );
}

export default Login;