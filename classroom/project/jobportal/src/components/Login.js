import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { validateUser } from "../store/reducers/userLoginSlice";
// import * as yup from "yup";
import { Formik } from "formik";
import { validateUser } from "../store/reducers/userValidationSlice";
import { setSession } from "../utils";

export default function Login() {

  // const { Formik } = formik;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const isValidUser = useSelector((state) => state?.user?.isValidUser);
  const isValidUser = useSelector((state) => state?.user?.isValid);
  const postingStatus = useSelector((state) => state?.user?.postingStatus);

  useEffect(() => {
    if (isValidUser) {
      navigate("/dashboard");
    }
  }, [isValidUser, navigate]);

  const handleSubmit = (values) => {
    dispatch(
      validateUser({ emailId: values.email, password: values.pwd })
    ).then((response) => {
      console.log(response);
      if (response.payload.status === "valid") {
        setSession("user logined");
        navigate("/dashboard");
      }
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4">
        <h2 className="mb-10 text-md-center">Login</h2>
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
                <Form.Control
                  type="password"
                  name="pwd"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.pwd}
                />
              </Form.Group>{" "}
              <Button
                variant="dark"
                type="submit"
                className="col-md-12 mt-4"
                disabled={postingStatus === "loading"}
              >
                {postingStatus === "loading" ? "Logging in..." : "Login"}
              </Button>
            </Form>
          )}
        </Formik>

        <p className="mt-3 text-center">
          <Link to="/signup">Don't have an account? Sign up</Link>
        </p>
      </div>
    </Container>
  );
}