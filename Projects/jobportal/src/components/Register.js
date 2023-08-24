import { Form,Button,Container,Row, Col,Alert } from "react-bootstrap";
import {  setKey, setSession } from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, selectRegistrationStatus, selectRegistrationError, createuser } from '../store/reducers/userSlice';
import { JOB_RECURITER, JOB_SEEKER } from '../utils/constants';
export default function Register(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('jobSeeker');
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');
  const RegisterPage = () => {
    const [formData, setFormData] = useState({});
      
    const [selectedRole, setSelectedRole] = useState('');
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state?.user?.isLoading);
  
  
    const handleRoleChange = (event) => {
      const role = event.target.value;
      setFormData({
        ...formData,
       type: role
      });    
    };
      const Handelclick= (event) =>{
         if(!email || !isValidEmail(email))
        {
            event.preventDefault();
            setError("*invalid email format");
            return;
        }
        if(!password || !isValidPassword(password)){
            event.preventDefault();
            setError("*Password must contain one capital,one special symbol");
            return;
        }
         else
        {
            setSession("registered");
            navigate("/");
        }
    }
    const switchto=()=>{
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("key");
    navigate("/");
  }
    //const switchto=()=>{
     //setSession("true")
      //setKey("login")
      //navigate('/');
    //}
  
 // const redirectToLogin = () => {
    //setSession("login");
    //setKey("login");
    //navigate("/");
  //};
 
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
      <Container className="d-flex justify-content-center" style={{marginTop:"100px"}}>
       <Row>
      <Col xs={12} lg={12} md={6} style={{border:"2px solid",padding:"40px",boxShadow:"3px 4px 4px 0.5px black"}}>
        <h2 className="mb-3 text-center">REGISTER</h2>
        <Form>
          <Form.Group controlId="registerEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="registerPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="userType" className="d-flex mt-3">
            <Form.Check
              type="radio"
              label="Job Seeker"
              name="userType"
              value="jobSeeker"
              className="me-3"
              checked={userType === 'jobSeeker'}
              onChange={() => setUserType('jobSeeker')}
              required
            />
            <Form.Check
              type="radio"
              label="Job Recruiter"
              name="userType"
              value="jobRecruiter"
              checked={userType === 'jobRecruiter'}
              onChange={() => setUserType('jobRecruiter')}
              required
            />
          </Form.Group>
          {userType === 'jobRecruiter' && (
            <Form.Group controlId="companyName">
              <Form.Label>Company Name:</Form.Label>
              <Form.Control
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
            </Form.Group>
          )}
          {error && <Alert variant="danger">{error}</Alert>}
          <Link as={Link} to="Login" onClick={switchto}>Already have a account?Login</Link>
           <Row>
      <Col>
          <Button className="ms-2" type="Submit" onClick={Handelclick}>Register</Button>
          </Col>
          </Row>
        

        </Form>
      </Col>
    </Row>
    </Container>
    );
}
}