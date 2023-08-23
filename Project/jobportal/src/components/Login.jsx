import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setSessionStorageItem } from "../utils/utils";

export default function Login() {
  const nav = useNavigate();
  const handleLogin = (event) => {
    setSessionStorageItem("isLoggedIn", true);
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
        Don't Have An Account? <Link>Register Now</Link>
        <Form.Group className="text-center">
          <Button
            style={{ backgroundColor: "black", border: "none" }}
            className="mt-3 mx-auto col-md-2"
            type="submit"
            onClick={handleLogin}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
