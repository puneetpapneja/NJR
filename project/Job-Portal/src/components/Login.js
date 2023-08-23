import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { setSession, setKey } from "./utils/utils";
import { useNavigate } from "react-router-dom";
import { setSession } from "../utils/utils";

function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    setSession("shubham");
    navigate("/");
  };

  return (
    <Container className='justify-content-between border border-black shadow-lg p-5 mb-4 bg-body-tertiary rounded w-25 bg-dark-subtle text-emphasis-dark '>
      <Form>
        <Row>
          <Form.Group>
            <h2 className='text-center '>Log In</h2>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-4" controlId="formGroupEmail" >
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-4" controlId="formGroupPassword">
            <Form.Label >Password:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-4">
            <Col xs="auto" className="my-1 col-12 ">
              <input value="test" type="checkbox" />
              <label>Remember me</label>
            </Col>
            <Col xs="auto" className="my-1 "><Link>
              Dont you have any account? Register Now</Link>
            </Col>
          </Form.Group>
        </Row>
        <Row className='text-center '>
          <Form.Group className="mb-3">
            <Button variant="primary" type="submit" size="lg" onClick={handleClick}>Login</Button>
          </Form.Group>
        </Row>
      </Form>

    </Container>
  );
}
export default Login;