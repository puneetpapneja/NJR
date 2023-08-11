import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


 function Login() {
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            {/* <div className="border border-3 border-primary"></div> */}
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2">Login</h2>
                   
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label className="text-center">
                          Email address
                        </Form.Label> */}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  id="ex2" type="email" />
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
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Don't have a account? Register Now
                          </a>
                        </p>
                      </Form.Group>
                      {/* <div className="d-grid" >
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div> */}
                      <Button variant="dark">Login</Button>
                    </Form>
                    {/* <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="{''}" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div> */}
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