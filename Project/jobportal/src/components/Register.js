import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';


function Register() {
  return (
    <>
    
    <Form className="form">
     <h1>Register Page</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className="input" type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className="input" type="password" placeholder="Password" />
      </Form.Group>

      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 radioo">
          <Form.Check
            inline
            label="Job recruiter"
            name="group1"
            type={type}
            id={`inline-${type}-1`} 
          />
          <Form.Check
            inline
            label="Job seeker"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
     
      <div className='arun'>
      <a  href='/'>Have a acount? Login now</a>
       
      <Button  className="btn" variant="primary" type="submit">Register</Button>
      </div>
    </Form>
    </>
  );
}

export default Register;