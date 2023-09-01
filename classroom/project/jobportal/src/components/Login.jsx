import { Form, Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import * as formik from "formik";
import * as yup from "yup";
import { setSession } from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginValidation } from "../store/reducers/userSlice";
export default function Login() {
  const { Formik } = formik;
  const status = useSelector((state) => state?.user?.isvalidUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  useEffect(() => {
    if (status) {
      setSession("isvaliduser");
      navigate("/");
    }
  }, [status]);
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-box">
        <h2 className="mb-4 text-md-center">Login</h2>
        <Formik
          validationSchema={schema}
          onSubmit={(values) => {
            dispatch(
              loginValidation({
                emailId: values.email,
                password: btoa(values.password),
              })
            );
            // console.log(values);
          }}
          initialValues={{
            email: "Mark@gmail.com",
            password: "Otto",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form
              noValidate
              onSubmit={handleSubmit}
              className="d-flex justify-content-center align-items-center flex-column"
            >
              <Form.Group as={Col} md="10" controlId="validationFormik01">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="10"
                className="mb-3"
                controlId="validationFormik02"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Button variant="link" as={Link} to="/register">
                Don't have an account? Register Now
              </Button>
              <Button type="submit" variant="dark">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
}
