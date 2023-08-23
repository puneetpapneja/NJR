import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../utils/utils";

export default function Login() {
  const nav = useNavigate();
  const handleLogin = (event) => {
    setSession("isLoggedIn", true);
  };

  return (
    <div style={{ marginTop: "18vh" }}>
      <h1 className="text-center">Login</h1>
      <Form className="text-center" style={{ marginTop: "8vh" }}>
        <Form.Group
          className="mb-4 mx-auto text-center col-md-4"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group
          className="mb-4 mx-auto text-center col-md-4"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Text className="text-muted">
            <Card.Link as={Link} to="/register">
              Don't have a account?Register Now
            </Card.Link>
          </Form.Text>
        </Form.Group>
        <Form.Group className="text-center">
          <Button
            variant="dark"
            type="submit"
            className="btn btn-dark"
            onClick={() => setSession("authenticate")}
            as={Link}
            to="/dashboard"
          >
            Login
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
