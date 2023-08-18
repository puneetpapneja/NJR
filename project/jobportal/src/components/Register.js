import { Form,Button,Container,Row, Col,Alert } from "react-bootstrap";
import { setKey, setSession } from "../utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('jobSeeker');
  const [companyName, setCompanyName] = useState('');
  const [error, setError] = useState('');
  
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
            setSession("Registered");
            navigate("/");
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
       <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <h2 className="mb-3">REGISTER</h2>
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
          <Form.Group controlId="userType">
            <Form.Label>User Type:</Form.Label>
            <Form.Check
              type="radio"
              label="Job Seeker"
              name="userType"
              value="jobSeeker"
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
          <Button variant="link" onClick={() =>{
        sessionStorage.setItem('alreadyAccount', false);
        navigate("/register");
    }}>Already have an account? Login Now</Button>
          <Button type="Submit" onClick={Handelclick}>Register</Button>
        </Form>
      </Col>
    </Row>
    );
}