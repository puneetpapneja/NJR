import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import './registerPage.css'

function RegisterP() {
  return (
    <div className='container'>
        <h1 id='he1'>Register</h1>
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email Address
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <div>
      {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Job seeker"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Job recruiter"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
      </div>
      <div><a href='#'>Have an account? Login Now</a></div>
      <div><button type='submit' id='btn'>login</button></div>
    </Form>
    
    </div>
  );
}

export default RegisterP;