// import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Register() {
//   const Navigate = useNavigate();
//   function handleclick() {
//     Navigate("/Dash");
//   }

//   const [user, setuser] = useState([]);
//   //userdata function
//   const userdata = (e) => {
//     setuser({ ...user, [e.target.name]: e.target.value });
//   };
//   console.log(user);
//   return (
//     <Container className="login_page">
//       <Row className="justify-content-center">
//         <Col xs={12} md={5}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Register</Card.Title>
//               <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     placeholder="Enter email"
//                     name="email"
//                     onChange={userdata}
//                   />
//                   <Form.Text className="text-muted">
//                     We'll never share your email with anyone else.
//                   </Form.Text>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     name="password"
//                     onChange={userdata}
//                   />
//                 </Form.Group>
//                 <Form.Check
//                   inline
//                   label="Job seeker"
//                   type="radio"
//                   name="work"
//                   value="job seeker"
//                   onChange={userdata}
//                 />
//                 <Form.Check
//                   inline
//                   label="Job Recruiter"
//                   type="radio"
//                   name="work"
//                   onChange={userdata}
//                   value="job recruiter"
//                 />
//                 <br /> <br /> <a href="/log">Have not log-in? Log-in now</a>{" "}
//                 <br /> <br />
//                 <Button variant="primary" type="submit" onClick={handleclick}>
//                   Register
//                 </Button>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Register;
import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  selectRegistrationStatus,
  selectRegistrationError,
  createuser,
} from "../store/reducers/userSlice";
import { JOB_RECURITER, JOB_SEEKER } from "../utils/constants";

const RegisterPage = () => {
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
    dispatch(createuser(formData));
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
            Have an account? <Link to="/LoginPage">Log in</Link>
          </Button>
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
};

export default RegisterPage;
