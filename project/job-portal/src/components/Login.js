import React from "react";
import { Form, Button, Card } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
// import { Nav } from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function Login() {

  const labelStyle = {
    fontWeight: "bold",
    marginTop: "1rem",
    textAlign: "left"
  };

  const linkStyle = {
    display: "block",
    marginBottom: "0.5rem",
    marginTop: "1rem"
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center p-4 mx-auto col-md-4">
      <h1 className="mb-4">Login</h1>
        <Form>
          <Form.Group
            controlId="formBasicEmail"
          >
            <Form.Label style={labelStyle}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group
            controlId="formBasicPassword"
          >
            <Form.Label style={labelStyle}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          {/* <LinkContainer className="text-center"> */}
          <Link as={Link} to="/signup"  style={linkStyle}>
            Don't Have An Account? Register Now
          </Link>
          {/* </LinkContainer> */}

          <Link to="/dashboard">
          <Button
            style={{ backgroundColor: "black", border: "none" }}
            className="mt-3"
            type="submit"
            block
          >
            
            Login
          </Button>
          </Link>
        </Form>
      </Card>
    </div>
  );
}
