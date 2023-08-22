import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setSession } from "../utils";

export default function Login() {
  const navigate = useNavigate();
  const handleClick = () => {
    setSession("yuvika");
    navigate("/dashboard");
  }

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

          <Link as={Link} to="/signup" style={linkStyle}>
            Don't Have An Account? Register Now
          </Link>


          <Link>
            <Button
              style={{ backgroundColor: "black", border: "none" }}
              className="mt-3"
              type="submit"
              block
              onClick={handleClick}
            >

              Login
            </Button>
          </Link>
        </Form>
      </Card>
    </div>
  );
}
