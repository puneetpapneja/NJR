import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const Navigate = useNavigate();

  const gotodashboard = (event) => {
    Navigate("/Dashboard");
  };

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
      <Row className="justify-content-center mt-5">
        <Col md={6} lg={4}>
          <h1 className="text-center mb-4">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-3"
              />
            </Form.Group>
            <Row className="justify-content-center">
              <Col>
                <Button type="submit" className="btn btn-primary" onClick={gotodashboard}>
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/Register">Register Now</Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
