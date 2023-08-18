import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css"; // Import your custom CSS file

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [jobSeeker, setJobSeeker] = useState(true);
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "" || confirmPassword === "") {
      alert("Please enter all of the required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("The passwords do not match.");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!jobSeeker && company === "") {
      alert("Please enter your company/organization name.");
      return;
    }
  };

  return (
    <Container className="register-container">
      <div className="register-box">
        <h1 className="register-heading">Register</h1>
        <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Check
              type="radio"
              label="Job Seeker"
              name="jobRole"
              checked={jobSeeker}
              onChange={() => setJobSeeker(true)}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Job Recruiter"
              name="jobRole"
              checked={!jobSeeker}
              onChange={() => setJobSeeker(false)}
            />
          </Col>
        </Row>
        {jobSeeker ? null : (
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="Company/Organization"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required={!jobSeeker} 
              />
            </Col>
          </Row>
        )}
        <Row className="mb-3">
          <Col>
            <Button type="submit">Register</Button>
          </Col>
        </Row>
      </Form>
        <p className="register-text">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </Container>
  );
};

export default Register;
