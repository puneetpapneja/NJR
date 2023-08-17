import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();
  const gotoRegister = () => {
    navigate("/");
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
                <h1>Register</h1>
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
                  <Form.Check
                    type="checkbox"
                    label="Accept Terms & Conditions"
                  />
                  <label onClick={gotoRegister}>
                    Already Registered. Go to logIn
                  </label>
                </Form.Group>
                <Button
                  style={{ backgroundColor: "black", border: "none" }}
                  type="submit"
                  onClick={gotoDashboard}
                >
                  Submit
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
