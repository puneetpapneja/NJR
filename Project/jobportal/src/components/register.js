import React, { useState } from "react";
import { Button, Form, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./register.css"; 
import { useDispatch, useSelector } from 'react-redux';
import { createuser } from '../store/reducers/userSlice'; 

const Register = () => {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state?.user?.isLoading);

  const handleRoleChange = (event) => {
    const role = event.target.value;
    setFormData({
      ...formData,
      type: role
    });
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setFormData({
      ...formData,
      emailId: email
    });
  }

  const handlePwdChange = (event) => {
    const pwd = event.target.value;
    setFormData({
      ...formData,
      password: pwd
    });
  }

  const handleCompanyName = (event) => {
    const companyName = event.target.value;
    setFormData({
      ...formData,
      companyName: companyName
    });
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    dispatch(createuser(formData));
  };

  return (
    <Container className="register-container">
      <div className="register-box">
        <h1 className="register-heading">Register</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handlePwdChange}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={handlePwdChange}
                required
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Check
                type="radio"
                label="Job Seeker"
                name="jobRole"
                value="Job Seeker"
                checked={formData?.type === "Job Seeker"}
                onChange={handleRoleChange}
                required
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="Job Recruiter"
                name="jobRole"
                value="Job Recruiter"
                checked={formData?.type === "Job Recruiter"}
                onChange={handleRoleChange}
                required
              />
            </Col>
          </Row>
          {formData?.type === "Job Recruiter" && (
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Company/Organization"
                  onChange={handleCompanyName}
                  required={!formData?.type === "Job Seeker"}
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
