import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import { createuser } from "../store/reducers/userSlice";

function Register() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const err = useSelector(state=>state?.user?.Error);
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCname] = useState("");
  const [type, settype] = useState("Job-seeker");

  const postData = (event) => {
    const item = {firstName:firstName, lastName:lastName, emailId:emailId, password:password, type:type, companyName:companyName};
    console.log(item);
    dispatch(createuser(item))
    if(err!==""){
      navigate('/')
    }
  }
  return (
    <div>
      <Container>
        <Row className=" d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            {/* <div className="border border-3 border-primary"></div> */}
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2">Register</h2>

                  <div className="mb-3">
                    <Form>
                    <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="text"
                  placeholder="Enter FirstName"
                  onChange={(e) => setFname(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlastname">
                <Form.Control
                  type="text"
                  placeholder="Enter LastName"
                  onChange={(e) => setLname(e.target.value)}
                />
              </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        {/* <Form.Label className="text-center">
                          Email address
                        </Form.Label> */}
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)}/>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)}/>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                defaultValue="Job-seeker"
                onChange={(e) => settype(e.target.value)}
              >
                <option>Job-seeker</option>
                <option>Job-recruiter</option>
              </Form.Select>
            </Form.Group>

                      <Form.Label>Company name</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setCname(e.target.value)}/>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Have a account ? Login Now
                          </a>
                        </p>
                      </Form.Group>
                      {/* <div className="d-grid" >
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div> */}
                      <Button variant="dark" onClick={postData}>Register</Button>
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
export default Register;