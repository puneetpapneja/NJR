import  Container from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Login = ()=>{

return (
<div className="form-container">
<Form className="form">
<div className="form-content">
  <h1 className="form-title">Login</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Text className="text-muted">
  <Card.Link href="#">Don't have a account?Register Now</Card.Link>
        </Form.Text>
  </Form.Group>

  <Button variant="dark" type="submit" className="btn">
    Login
  </Button>
  </div>
</Form>
</div>
)
}
export default Login;