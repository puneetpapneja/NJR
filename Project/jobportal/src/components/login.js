import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter your email and password.");
      return;
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Row className="justify-content-center">
              <Col>
                <Button type="submit" className="btn btn-primary">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
          <p className="text-center">
            Don't have an account? <Link to="./components/registerpage">Register Now</Link> 
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
