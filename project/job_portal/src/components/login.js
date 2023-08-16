import { Button, Form, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      setValidated(true);
    }
  };

  useEffect(() => {
    if (validated) {
      navigate("/DashboardPage");
    }
  }, [validated, navigate]);

  return (
    <Container>
      <Row>
        <h1 className='text-center mt-5 mb-3'>Login</h1>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" required />
            <Form.Control.Feedback type="invalid">
              Please choose an email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid">
              Please set a password.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button
          variant="link"
          as={Link}
          to="/RegisterPage"
          className='p-0 mb-3'
        >
          Don't have an account? Register Now
        </Button>
        <br />
        <Container className='text-center'>
          <Button type="submit" variant='dark'>Login</Button>
        </Container>
      </Form>
    </Container>
  );
}
