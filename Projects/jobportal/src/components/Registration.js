import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Registration.css';
function BasicExample() {
  return (
    <>
     <h1>Login Page</h1>
    <Form className="form">
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="input" type="email" placeholder="Email address" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="input" type="password" placeholder="Password" />
      </Form.Group>
      
      <div class="control">
                <input type="radio" name="rd_1"/>Job Seeker
                <input type="radio" name="rd_2"/>Job Recruiter 
              </div>
      <Button className="btn" variant="primary" type="Register">
        Register
      </Button>
    </Form>
    </>
  );
}

export default BasicExample;