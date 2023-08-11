import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
function BasicExample() {
  return (
    <>
    <h1>Register</h1>
    <Form className="input">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="forms" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="forms" type="password" placeholder="Password" />
      </Form.Group>
      <div className="radio">
      <Form.Check 
            type='radio'
            id='radio'
            label="Job Seekers"
            name="radio"
          />
       
          <Form.Check 
            type='radio'
            id='radio'
            name="radio"
            label="Job Recruiters"
          />
         </div>
         <div>
      <a href='/'>Have a Account?Login Now</a>
      </div>
      <Button className="btn" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
}

export default BasicExample;