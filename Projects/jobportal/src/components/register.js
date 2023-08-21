import { Form,Button,Container,Row, Col,Alert } from "react-bootstrap";
import { setKey, setSession } from "../utils"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register(){
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [emailError,setEmailError] = useState("");
    const [password,setPassword]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [role,setRole]=useState("");
    const [roleError,setRoleError]=useState("");
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const Handelclick= (event) =>{
        if(!email || !emailRegExp.test(email))
        {
            event.preventDefault();
            setEmailError("*invalid email format");
            return;
        }
        if(!password || !passwordRegExp.test(password)){
            event.preventDefault();
            setPasswordError("*Password must have :-  A capital letter. A small case letter. A number . And minimum length is 8!");
            return;
        }
        if(!role)
        {
            event.preventDefault();
            setRoleError("*select a role");
            return;
        }
        else
        {
            setSession("Registered");
            navigate("/");
        }
    }
    const SwitchTo = () =>{
        setSession("");
        setKey("login");
        navigate("/Login");
    }
    return(
        <Container className="d-flex justify-content-center">
            <Form>
                <Row>
                    <h1 className="text-center my-5 text-danger">Register</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className="my-3">Email Address</Form.Label>
                        <br />
                        <Form.Control 
                            type="text"
                            value={email}
                            onChange={(e)=>{
                                    setEmail(e.target.value);
                                    setEmailError("");
                                }
                            }
                        />
                        {emailError && <Alert variant='danger'>{emailError}</Alert>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className="my-3">Password</Form.Label>
                        <br />
                        <Form.Control 
                            type="text"
                            value={password}
                            onChange={
                                (e)=>{
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                }
                            }
                        />
                        {passwordError && <Alert variant='danger'>{passwordError}</Alert>}
                    </Form.Group>
                </Row>
                <Row>
                <br />
                </Row>
                <Row>
                        <Col>
                            <Form.Check 
                                type="radio" 
                                label="Job Seeker" 
                                name ="role" 
                                id='Job-Seeker' 
                                value="Job Seeker" 
                                checked={role === "Job Seeker"}
                                onChange={
                                    (e)=>{
                                        setRole(e.target.value);
                                        setRoleError("");
                                    }
                                }
                            />
                        </Col>
                        <Col>
                            <Form.Check 
                                type="radio" 
                                label="Job Recruiter" 
                                name ="role" 
                                id='Job-Recruiter' 
                                value="Job Recruiter" 
                                checked={role === "Job Recruiter"}
                                onChange={
                                    (e)=>{
                                        setRole(e.target.value);
                                        setRoleError("");
                                    }
                                }
                            />
                        </Col>
                        {roleError && <Alert variant="danger">{roleError}</Alert>}
                </Row>
                <Row>
                    <Container className="float-start mb-5 mt-3">
                        <Button variant="link" href="/Login" onClick={SwitchTo}>Already have an account? Login Now</Button>
                    </Container>
                </Row>
                <Row>
                    <Button type="Submit" variant="dark" onClick={Handelclick}>Register</Button>
                </Row>
            </Form>
        </Container>
    );
}