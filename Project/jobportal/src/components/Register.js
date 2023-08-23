import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const Navigate = useNavigate();
  function handleclick() {
    Navigate("/dashboard");
  }

  const [user, setuser] = useState([]);
  const userdata = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
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
                    onChange={userdata}
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
                    onChange={userdata}
                  />
                </Form.Group>
                <Form.Check
                  inline
                  label="Job seeker"
                  type="radio"
                  name="work"
                  value="job seeker"
                  onChange={userdata}
                />
                <Form.Check
                  inline
                  label="Job Recruiter"
                  type="radio"
                  name="work"
                  onChange={userdata}
                  value="job recruiter"
                />
                <br /> <br />
                <Link as={Link} to="/login">
                  Have not log-in? Log-in now
                </Link>
                <br /> <br />
                <Button variant="primary" type="submit" onClick={handleclick}>
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;

// import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const navigate = useNavigate();
//   const gotoRegister = () => {
//     navigate("/Register");
//   };

//   const gotoDashboard = () => {
//     navigate("/dashboard");
//   };
//   return (
//     <div>
//       <Container>
//         <Row className="vh-100 d-flex justify-content-center align-items-center">
//           <Col md={8} lg={6} xs={12}>
//             {/* <div className="border border-3 border-primary"></div> */}
//             <Card className="shadow">
//               <Card.Body>
//                 <div className="mb-3 mt-md-4">
//                   <h2 className="fw-bold mb-2">Register</h2>

//                   <div className="mb-3">
//                     <Form>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         {/* <Form.Label className="text-center">
//                           Email address
//                         </Form.Label> */}
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control type="email" />
//                       </Form.Group>

//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicPassword"
//                       >
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" />
//                       </Form.Group>
//                       <div class="form-check-inline">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="flexRadioDefault"
//                           id="flexRadioDefault1"
//                         />
//                         <label class="form-check-label" for="flexRadioDefault1">
//                           Job Seeker
//                         </label>
//                       </div>
//                       <div class="form-check-inline">
//                         <input
//                           class="form-check-input"
//                           type="radio"
//                           name="flexRadioDefault"
//                           id="flexRadioDefault2"
//                           checked
//                         />
//                         <label class="form-check-label" for="flexRadioDefault2">
//                           Job Recruiter
//                         </label>
//                       </div>

//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCheckbox"
//                       >
//                         <p className="small">
//                           <a
//                             className="text-primary"
//                             href="#!"
//                             onClick={gotoRegister}
//                           >
//                             Have a account ? Login Now
//                           </a>
//                         </p>
//                       </Form.Group>

//                       <Button variant="dark" onClick={gotoDashboard}>
//                         Register
//                       </Button>
//                     </Form>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }
// export default Register;
