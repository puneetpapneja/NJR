import { Form,Button,Container,Row, Col,Alert } from "react-bootstrap";
import { useState } from 'react';

function RegisterP() {
  const [email,setEmail]=useState("");
    const [password , setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError,setEmailError]=useState("");
    // const navigate = useNavigate();
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const Handleclick = (event) =>{
        if(!email || !emailRegExp.test(email))
        {
            event.preventDefault();
            setEmailError("*invalid email format");
            return;
        }
        if(!password || !passwordRegExp.test(password)){
            event.preventDefault();
            setPasswordError("Password must have :-  A capital letter. A small case letter. A number . And minimum length is 8!");
            return;
        }}
  return (
    
    <Container className='d-flex justify-content-center'>
            <Form>
                <Row>
                    <h1 className="text-center my-3">Register</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className="my-3">Email Address</Form.Label>
                        <br />
                        <Form.Control 
                            type="text"
                            value={email}
                           
                        />
                       
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className="my-3">Password</Form.Label>
                        <br />
                        <Form.Control 
                            type="text"
                            value={password}
                           
                        />
                        
                    </Form.Group>
                </Row>
                <Row>
                <br />
                </Row>
                <Row className="mt-3">
                        <Col>
                            <Form.Check 
                                type="radio" 
                                label="Job Seeker" 
                                name ="role" 
                                id='Job-Seeker' 
                                value="Job Seeker" 
                               
                            />
                        </Col>
                        <Col>
                            <Form.Check 
                                type="radio" 
                                label="Job Recruiter" 
                                name ="role" 
                                id='Job-Recruiter' 
                                value="Job Recruiter" 
                              
                               
                            />
                        </Col>
            
                </Row>
                <Row>
                    <Container className="float-start mb-3 mt-3">
                        <Button variant="link" href="/Login" >Already have an account? Login Now</Button>
                    </Container>
                </Row>
                <Row>
                    <Button type="Submit" variant="dark">Register</Button>
                </Row>
            </Form>
        </Container>
  );
}

export default RegisterP;