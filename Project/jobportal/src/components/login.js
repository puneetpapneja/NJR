import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"; // Import your custom CSS file

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
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control mb-3"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control mb-3"
            />
          </Form.Group>
          <Row className="justify-content-center">
            <Col>
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={gotodashboard}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Form>
        <p className="login-text">
          Don't have an account? <Link to="/Register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
