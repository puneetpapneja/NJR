import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link , useNavigate } from "react-router-dom";
import "./signup.css";
import { setSession } from "../utils";

export default function SignUp() {

  const navigate = useNavigate();
  const handleClick = () => {
    setSession("Registered");
    navigate("/login");
  };

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
      <h1 className="mb-4">Register</h1>
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

        <Form.Group
          controlId="formBasicCheckbox"
        >
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3 mt-3">
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
          <Link as={Link} to="/login" style={linkStyle}>
            Have An Account? Login Now
          </Link>
        </Form.Group>

        <Form.Group className="text-center">
        <Link to="/dashboard">
          <Button
            style={{ backgroundColor: "black", border: "none" }}
            className="mt-3"
            type="submit"
            block
            onClick={handleClick}
          >
            Register
          </Button>
          </Link>
        </Form.Group>
      </Form>
      </Card>
    </div>
  );
}
