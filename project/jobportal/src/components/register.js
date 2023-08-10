import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Register = ()=>{

return (
<div className="form-container">
<Form className="form">
<div className="form-content">
  <h1 className="form-title">Register</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicRadio">
    <Form.Check
            inline
            label="Job Seeker"
            id={"Job seeker"}/>
     <Form.Check
            inline
            label="Job Recruiter"
            id={"Job Recruiter"}
          />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Text className="text-muted">
  <Card.Link as={Link} to="/">Have a account?Login Now</Card.Link>
        </Form.Text>
  </Form.Group>

  <Button variant="dark" type="submit" className="btn">
    Register
  </Button>
  </div>
</Form>
</div>
)
}
export default Register;