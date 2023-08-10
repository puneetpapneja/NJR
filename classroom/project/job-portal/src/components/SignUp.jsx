import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signup.css";
export default function SignUp() {
  return (
    <div style={{ marginTop: "18vh" }}>
      <h1 className="text-center">Register</h1>
      <Form style={{ marginTop: "8vh" }}>
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

        <Form.Group
          className="mb-4 mx-auto text-center col-md-3"
          controlId="formBasicCheckbox"
        >
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Job Seeker"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Job Recruiter"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
          <Link as={Link} to="/login">
            Don't Have An Account? Register Now
          </Link>
        </Form.Group>

        <Form.Group className="text-center">
          <Button
            style={{ backgroundColor: "black", border: "none" }}
            className="mx-auto col-md-2"
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
