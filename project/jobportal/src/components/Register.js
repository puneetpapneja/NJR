import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Register() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>
                <h1 className="text-center">Register</h1>
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

                <Form>
                 {[ 'radio'].map((type) => (
                 <div key={`inline-${type}`} className="mb-3">
                 <Form.Check
                 inline
                 label="job seeker"
                 name="group1"
                 type={type}
                 id={`inline-${type}-1`}
                />
                  <Form.Check
                 inline
                 label="job recruiter"
                 name="group1"
                 type={type}
                 id={`inline-${type}-2`}
                /> 
                </div>
                ))}
              </Form>

              <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Have an account ? Login Now
                          </a>
                        </p>
              </Form.Group>

                
                <Button variant="dark" type="submit">
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