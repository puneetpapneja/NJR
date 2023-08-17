/*import {Form} from "react-bootstrap";
export default function Login(params) {
    return(
        <div>
            <p className="title">Login </p>
        <Form>
        <label for="email address">Email Address</label>
          <input type="text" value="email address"/>
        <label for="password">Password</label>
        <input type="text" value="password"/>
        <input type="Button" value="login"/>
        </Form>
        </div>
    )*/
/* import "./../index.css"
import React,{useState} from 'react';
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Handle login logic here, such as making an API request
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label className="flex-column">Username<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
            {/* <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> */
          /*</div>
          <div>
            <label className="flex-column">Password<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  } */
import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./signup.css";
export default function LoginForm() {
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
          <Link as={Link} to="/">
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
  
 // export default LoginForm;