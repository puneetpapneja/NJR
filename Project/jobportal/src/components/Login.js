import { Col, Button, Row, Container, Card, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Container>
        <Row className="m-4 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2">Login</h2>

                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label>Email address</label>
                        <Form.Control id="ex2" type="email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        {/* <p className="small"> */}
                        {/* <Nav.Link
                            className="text-primary"
                            as={Link}
                            to="/register"
                          >
                            Don't have a account? Register Now
                          </Nav.Link> */}

                        {/* </p> */}
                      </Form.Group>
                      <Link as={Link} to="/register">
                        Don't have a account? Register Now
                      </Link>
                      <Button variant="dark">Login</Button>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Login;
