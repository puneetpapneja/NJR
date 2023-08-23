import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup'; 

import { validateUser } from '../store/reducers/userSlice';

import "./login.css"; 
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isValidUser = useSelector(state => state?.user?.isValidUser);

  useEffect(() => {
    if (isValidUser) {
      navigate("/Dashboard");
    }
  }, [isValidUser]);

  const validationSchema = yup.object({
    email: yup.string().email().required(),
    pwd: yup.string().required(),
  });

  const initialValues = {
    email: '',
    pwd: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(validateUser({ email: values.email, pwd: values.pwd }));
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-heading">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control mb-3 ${touched.email && errors.email ? 'is-invalid' : ''}`}
                />
                {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  name="pwd"
                  placeholder="Password"
                  value={values.pwd}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`form-control mb-3 ${touched.pwd && errors.pwd ? 'is-invalid' : ''}`}
                />
                {touched.pwd && errors.pwd && <div className="invalid-feedback">{errors.pwd}</div>}
              </Form.Group>
              <Row className="justify-content-center">
                <Col>
                  <Button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Login
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
        <p className="login-text">
          Don't have an account? <Link to="/Register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
