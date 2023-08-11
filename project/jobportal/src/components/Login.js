import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
function BasicExample() {
  return (
    <>
     <h1>Login Page</h1>
    <Form className="form">
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="inputs" type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="inputs" type="password" placeholder="Password" />
      </Form.Group>
      <div>
      <a href='/'>Don't have a account?Register Now</a>
      </div>
      <Button className="btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default BasicExample;