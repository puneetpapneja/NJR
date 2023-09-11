import React, { useEffect, useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { validateUser } from "../store/reducers/userLoginSlice";
import { Formik } from "formik";
import { validateUser } from "../store/reducers/userValidationSlice";
import { setSession } from "../utils";

export default function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isValidUser = useSelector((state) => state?.user?.isValid);
  const postingStatus = useSelector((state) => state?.user?.postingStatus);

  useEffect(() => {
    if (isValidUser) {
      navigate("/dashboard");
    }
  }, [isValidUser, navigate]);

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [error, setError] = useState("");

  const eyeIconStyle = {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  };

  const passwordInputStyle = {
    position: "relative",
  };

  const errorBoxStyle = {
    border: "2px solid red",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px 0",
    width:"50%",
  };

  const handleSubmit = (values) => {
    dispatch(
      validateUser({ emailId: values.email, password: values.pwd })
    ).then((response) => {
      console.log(response);
      if (response.payload.status === "valid") {
        setSession("user logined");
        navigate("/dashboard");
      } else {
        setError("Invalid email or password"); 
      }
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100"
      style={{ maxWidth: "500px" }}>
      <div className="login-box p-4"
        style={{
          width: "100%",
          border: "3px solid black",
          borderRadius: "10px",
          boxShadow: "12px 13px 20px 6px rgba(201,201,201,1)",
        }} >
        <h2 className="mb-4 text-center">Login</h2>
        <Formik initialValues={{ email: "", pwd: "" }} onSubmit={handleSubmit}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div style={passwordInputStyle}>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    name="pwd"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pwd}
                  />
                  <div
                    style={eyeIconStyle}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash"></i>
                    ) : (
                      <i className="bi bi-eye"></i>
                    )}
                  </div>
                </div>
              </Form.Group>{" "}
              {error && (
                <Alert variant="danger" className="mt-3 text-center">
                  {error}
                </Alert>
              )}
              <div className="text-center">
                <Button
                  variant="dark"
                  type="submit"
                  className="col-4 mt-3"
                  disabled={postingStatus === "loading"}
                >
                  {postingStatus === "loading" ? "Logging in..." : "Login"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </Container>
  );
}