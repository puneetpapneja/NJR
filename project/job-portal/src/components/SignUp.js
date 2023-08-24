import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "../utils";
import { JOB_RECURITER, JOB_SEEKER } from "../utils/constants";
import { postNewUser } from "../store/reducers/userRegisterSlice";

function SignUp() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [selectedRole, setSelectedRole] = useState("");
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.user?.isLoading);
  const handleRoleChange = (event) => {
    const role = event.target.value;
    setFormData({
      ...formData,
      type: role,
    });
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setFormData({
      ...formData,
      emailId: email,
    });
  };

  const handlePwdChange = (event) => {
    const pwd = event.target.value;
    setFormData({
      ...formData,
      password: pwd,
    });
  };

  const handleCompanyName = (event) => {
    const companyName = event.target.value;
    setFormData({
      ...formData,
      companyName: companyName,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    dispatch(postNewUser(formData)).then((response) => {
      console.log(response);
      if (response.meta.requestStatus === "fulfilled") {
        setSession("user registered");
        navigate("/dashboard");
      }
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Register</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </Form.Group>
          {/* Other form fields */}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePwdChange}
            />
          </Form.Group>
          {[JOB_SEEKER, JOB_RECURITER].map((role) => (
            <Form.Check
              key={role}
              inline
              label={role}
              name="role"
              type="radio"
              value={role}
              id={`inline-role-${role}`}
              onChange={handleRoleChange}
              checked={formData?.type === role}
            />
          ))}
          <Container className="d-flex flex-column mb-3">
            {formData?.type === "Job Recruiter" && (
              <Form.Group controlId="formBasicCompany">
                <Form.Label>Company name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Company Name"
                  onChange={handleCompanyName}
                />
              </Form.Group>
            )}

            <Button variant="link">
              <Link to="/"> Have an account? Log in</Link>
            </Button>
          </Container>
          <Button
            disabled={isLoading}
            variant="dark"
            type="submit"
            className="w-100"
          >
            Register
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default SignUp;