import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Login() {
  return (
    <div>
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h1>Login</h1>
              </Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <h4>Email address</h4>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <h4>Password</h4>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Dont haave a account? Register Now" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Login;