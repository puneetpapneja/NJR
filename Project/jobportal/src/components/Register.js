import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  selectRegistrationStatus,
  selectRegistrationError,
  create,
} from "../store/reducers/userSlice";

import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const Navigate = useNavigate();
  function handleclick() {
    Navigate("/dashboard");
  }
  const gotoLogin = () => {
    navigate("/Login");
  };

  // const [formData, setFormData] = useState({});

  // const [selectedRole, setSelectedRole] = useState("");
  // const [validated, setValidated] = useState(false);
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state?.user?.isLoading);

  // const handleRoleChange = (event) => {
  //   const role = event.target.value;
  //   setFormData({
  //     ...formData,
  //     type: role,
  //   });
  // };

  // const handleEmailChange = (event) => {
  //   const email = event.target.value;
  //   setFormData({
  //     ...formData,
  //     emailId: email,
  //   });
  // };

  // const handlePwdChange = (event) => {
  //   const pwd = event.target.value;
  //   setFormData({
  //     ...formData,
  //     password: pwd,
  //   });
  // };

  // const handleCompanyName = (event) => {
  //   const companyName = event.target.value;
  //   setFormData({
  //     ...formData,
  //     companyName: companyName,
  //   });
  // };
  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   event.preventDefault();
  //   event.stopPropagation();
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   setValidated(true);
  //   dispatch(createuser(formData));
  // };
  return (
    <Container className="login_page">
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
          <Card>
            <Card.Body>
              <h2>Register</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    // onChange={userdata}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    // onChange={userdata}
                  />
                </Form.Group>
                <Form.Check
                  inline
                  label="Job seeker"
                  type="radio"
                  name="work"
                  value="job seeker"
                  // onChange={userdata}
                />
                <Form.Check
                  inline
                  label="Job Recruiter"
                  type="radio"
                  name="work"
                  // onChange={userdata}
                  value="job recruiter"
                />
                <br /> <br />
                <label onClick={gotoLogin}>
                  Already have account? go to Login
                </label>
              </Form>
              <br />
              <Button variant="dark" type="submit" onClick={handleclick}>
                Register
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
export default Register;
