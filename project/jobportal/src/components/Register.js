import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const gotoRegister = () => {
    navigate("/Register");
  };

  const gotoDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            {/* <div className="border border-3 border-primary"></div> */}
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2">Register</h2>

                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label className="text-center">
                          Email address
                        </Form.Label> */}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control  type="email" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                      </Form.Group>
                      <div class="form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                        Job Seeker
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault2">
                          Job Recruiter
                        </label>
                      </div>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!"onClick={gotoRegister }>
                            Have a account ? Login Now
                          </a>
                        </p>
                      </Form.Group>
                    
                      <Button variant="dark" onClick={gotoDashboard} >Register</Button>
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
export default Register;
