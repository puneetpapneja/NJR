import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createuser } from "../store/reducers/userSlice";
import { useDispatch } from "react-redux";

function Register() {
  const dispatch = useDispatch();

  const Navigate = useNavigate();
  // function handleclick() {
  //   dispatch(createuser(user));

  //   Navigate("/Dash");
  // }

  const [user, setuser] = useState([]);
  //userdata function
  const userdata = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createuser(user));
  };

  return (
    <Container className="login_page">
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Register</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="emailId"
                    onChange={userdata}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={userdata}
                  />
                </Form.Group>
                <Form.Check
                  inline
                  label="Job seeker"
                  type="radio"
                  name="work"
                  value="job seeker"
                  onChange={userdata}
                />
                <Form.Check
                  inline
                  label="Job Recruiter"
                  type="radio"
                  name="work"
                  onChange={userdata}
                  value="job recruiter"
                />
                <br /> <br /> <a href="/log">Have not log-in? Log-in now</a>{" "}
                <br /> <br />
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
