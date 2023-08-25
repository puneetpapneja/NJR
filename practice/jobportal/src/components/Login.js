import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { validateUser } from "../store/reducers/userLoginSlice";
import { Formik } from "formik";
import * as yup from "yup";

import "./dashboard.css"; // Import your custom CSS for styling

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isValidUser = useSelector((state) => state?.user?.isValidUser);

  useEffect(() => {
    if (isValidUser) {
      navigate("/dashboard");
    }
  }, [isValidUser]);

  return (
    <Container className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-4 text-center">Login</h2>
        <Formik
          initialValues={{ email: "", pwd: "" }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(
              validateUser({ emailId: values.email, password: values.pwd })
            );
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email().required("Email is required"),
            pwd: yup.string().required("Password is required"),
          })}
        >
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
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="pwd"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pwd}
                  isInvalid={touched.pwd && !!errors.pwd}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.pwd}
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                className="col-md-12 mt-4 btn-login"
                disabled={Object.keys(errors).length > 0}
              >
                Log in
              </Button>
            </Form>
          )}
        </Formik>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Register Now</Link>
        </p>
      </div>
    </Container>
  );
}
