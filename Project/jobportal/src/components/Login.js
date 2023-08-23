// import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// function Login() {
//   const navigate = useNavigate();
//   const gotoRegister = () => {
//     navigate("/Register");
//   };
//   return (
//     <div>
//       <Container>
//         <Row className="m-4 d-flex justify-content-center align-items-center">
//           <Col md={8} lg={6} xs={12}>
//             <Card className="shadow">
//               <Card.Body>
//                 <div className="mb-3 mt-md-4">
//                   <h2 className="fw-bold mb-2">Login</h2>

//                   <div className="mb-3">
//                     <Form>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <label>Email address</label>
//                         <Form.Control id="ex2" type="email" />
//                       </Form.Group>

//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicPassword"
//                       >
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" />
//                       </Form.Group>
//                       <Form.Group
//                         className="mb-3"
//                         controlId="formBasicCheckbox"
//                       ></Form.Group>

//                       <br />
//                       <Button variant="dark">Login</Button>
//                     </Form>
//                     <Button variant="link" onClick={gotoRegister}>
//                       Don't have a account? Register Now
//                     </Button>
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
// export default Login;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();
  const gotoRegister = () => {
    navigate("/Register");
  };
  const gotoDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Container className="logReg">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h1>Login</h1>
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <label onClick={gotoRegister}>
                    Don't have account? Register now
                  </label>
                </Form.Group>

                <Button
                  style={{ backgroundColor: "black", border: "none" }}
                  type="submit"
                  onClick={gotoDashboard}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
