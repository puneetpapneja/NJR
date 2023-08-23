import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./signup.css";
// import { postNewUser } from "./userRegistrationSlice";
import { setSessionStorageItem } from "../utils/utils";
import { postNewUser } from "../store/reducers/userRegisterSlice";
export default function SignUp() {
  const [checkEmail, setCheckEmail] = useState("");
  const [selectedRole, setSelectedRole] = useState("jobSeeker"); // Default selected role
  const [error, setError] = useState("");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const dispatch = useDispatch();
  const postingStatus = useSelector(
    (state) => state.userRegistration.postingStatus
  );

  const handleLogin = (event) => {
    event.preventDefault();
    if (!emailPattern.test(checkEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    dispatch(postNewUser({ email: checkEmail, role: selectedRole }));
  };
  return (
    <div style={{ marginTop: "18vh" }}>
      <h1 className="text-center">Register</h1>
      <Form style={{ marginTop: "8vh" }}>
        <Form.Group
          className="mb-4 mx-auto text-center col-md-4"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={checkEmail}
            onChange={(e) => setCheckEmail(e.target.value)}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </Form.Group>

        <Form.Group
          className="mb-4 mx-auto text-center col-md-4"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
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
                type={type}
                name="role"
                value="jobSeeker"
                checked={selectedRole === "jobSeeker"}
                onChange={() => setSelectedRole("jobSeeker")}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Job Recruiter"
                type={type}
                name="role"
                value="jobRecruiter"
                checked={selectedRole === "jobRecruiter"}
                onChange={() => setSelectedRole("jobRecruiter")}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
          <Link
            as={Link}
            to="/login"
            // onClick={SwitchTo}
          >
            Already Have An Account? Login Here
          </Link>
        </Form.Group>

        <Form.Group className="text-center">
          <Button
            style={{ backgroundColor: "black", border: "none" }}
            className="mx-auto col-md-2"
            type="submit"
            onClick={handleLogin}
            disabled={postingStatus === "loading"}
          >
            {postingStatus === "loading" ? "Registering..." : "Submit"}
          </Button>
        </Form.Group>
      </Form>
      <Link as={Link} to="/login">
        Already Have An Account? Login Here
      </Link>
    </div>
  );
}