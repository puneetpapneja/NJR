import React from "react";
import { Form, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Login() {
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
        {/* <LinkContainer className="text-center"> */}
        <Link as={Link} to="/signup">
          Don't Have An Account? Register Now
        </Link>
        {/* </LinkContainer> */}

        <Form.Group className="text-center">
          <Button
            style={{ backgroundColor: "black", border: "none" }}
            className="mt-3 mx-auto col-md-2"
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
