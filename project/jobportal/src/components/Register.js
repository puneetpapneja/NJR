import { Form,Button,Container,Row, Col,Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/reducers/userregisterSlice";
export default function Register(){
    const navigate = useNavigate();
    const err = useSelector(state=>state?.user?.Error);
    const dispatch = useDispatch();
    const [email,setEmail]=useState("");
    const [emailError,setEmailError] = useState("");
    const [password,setPassword]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const [role,setRole]=useState("");
    const [roleError,setRoleError]=useState("");
    const [comp,setComp]=useState("d-none");
    const [compError,setCompError]=useState("");
    const [company,setCompany]=useState("");
    const Handelclick= (event) =>{
        if(!email || !isValidEmail(email))
        {
            event.preventDefault();
            setEmailError("must contain @gmail.com");
            return;
        }
        if(!password || !isValidPassword(password)){
            event.preventDefault();
            setPasswordError("*Password must contain one capital,one special symbol");
            return;
        }
        if(!role)
        {
            event.preventDefault();
            setRoleError("*select a role");
            return;
        }
        if(role === "Job Recruiter" && !company)
        {
            event.preventDefault();
            setCompError("*required");
            return;
        }
        const data = {emailId:email,password:password,type:role,companyName:company};
        console.log(data);
        dispatch(registerUser(data));
        if(!err){
            navigate("/login");
        }
    }
      const isValidEmail = (email) => {
    return email.includes('@gmail.com');
  };
  const isValidPassword = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasCapitalLetter && hasNumber && hasSpecialChar;
  };
    return(
        <Container>
            <Form as={Col} md="5" sm="12" className="mx-auto"  style={{border:"2px solid",padding:"20px 70px",marginTop:"60px",boxShadow:"3px 4px 4px 0.5px black"}}>
                <Row>
                    <h1 className="text-center my-5">Register</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className="my-3">Email Address</Form.Label>
                        <br />
                        <Form.Control 
                            type="text"
                            value={email}
                            placeholder="Enter your Email"
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
                        <Form.Label className="my-3 mt">Password</Form.Label>
                        <br />
                        <Form.Control 
                            type="text"
                            value={password}
                            placeholder="Enter your Password"
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
                                        setComp("d-none")
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
                                        setComp("d-block")
                                    }
                                }
                            />
                        </Col>
                        {roleError && <Alert variant="danger">{roleError}</Alert>}
                </Row>
                <Row className={comp}>
                    <Form.Group>
                        <Form.Label className="my-3">Enter the Company Name </Form.Label>
                        <Form.Control 
                            type="text"
                            placeholder="Enter your Company Name"
                            value={company}
                            onChange={
                                (e)=>{
                                    setCompany(e.target.value);
                                    setCompError("");
                                }
                            }
                        />
                    </Form.Group>
                    {compError &&  <Alert variant="danger">{compError}</Alert>}
                </Row>
                <Row>
                    <Container className="float-start mb-3">
                        <Button variant="link"as={Link} to="/login">Already have an account? Login Now</Button>
                    </Container>
                </Row>
                <Row>
                    {err && <Alert variant="danger">{err}</Alert>}
                    <Button type="Submit" variant="primary" onClick={Handelclick} style={{width:"100px",marginLeft:"20px"}}>Register</Button>
                </Row>
            </Form>
        </Container>
    );
}