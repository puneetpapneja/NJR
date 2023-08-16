import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    if (validated) {
      navigate('/DashboardPage');
    }
  }, [validated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setValidated(true);
    }
  };

  const [checkradio, setcheckradio] = useState(false);
  const handleradio = (event) => {
    const form = event.currentTarget;
    if (form.value === "J-r") {
      setcheckradio(true);
    } else {
      setcheckradio(false);
    }
  };

  return (
    <Container>
      <Row>
        <h1 className='text-center mt-5 mb-3'>Register</h1>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required />
            <Form.Control.Feedback type='invalid'>please enter a valid email</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type='invalid'>please set a password</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <br />
        <Row>
          <Col xs='6'>
            <Form.Check type='radio' label='Job Seeker' name="role" value="J-s" onChange={handleradio} inline feedback="please select any one" feedbackType='invalid' required />
          </Col>
          <Col xs='6'>
            <Form.Check type='radio' label='Job Recruiter' value="J-r" name='role' onChange={handleradio} inline feedback="please select any one" feedbackType='invalid' required />
          </Col>
        </Row>
        <br />
        <Row>
          {checkradio &&
            <Form.Group controlId='formCompany'>
              <Form.Label>Company name</Form.Label>
              <Form.Control type="text" required />
              <Form.Control.Feedback type='invalid'>please enter a company name</Form.Control.Feedback>
            </Form.Group>}
        </Row>
        <Button variant="link" as={Link} to="/">Have an account? Login Now</Button>
        <br />
        <Container className='text-center'>
          <Button type="submit" variant='dark'>Register</Button>
        </Container>
      </Form>
    </Container>
  );
}
