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
    const SwitchTo = () =>{
        setSession("");
        setKey("Regsitered");
        navigate("/Register");
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
       <Row className="justify-content-center m-5">
      <Col xs={12} md={6}>
        <h2 className="mb-3 text-primary text-center" style={{fontSize:"45px"}}>LOGIN</h2>
        <Form>
          <Form.Group controlId="registerEmail" className="mb-2" style={{width:"400px",marginLeft:"70px",marginTop:"30px"}}>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="registerPassword"  style={{width:"400px",marginLeft:"70px",marginTop:"30px"}}>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <Row style={{width:"400px",marginLeft:"50px"}}>
          <Col>
          <Button variant="link" href="/Register" onClick={SwitchTo}>Already have an account? Login Now</Button>
          </Col>
          </Row>
          <Row  style={{marginLeft:"70px",marginTop:"10px"}}>
            <Col>
          <Button type="Submit" onClick={Handelclick}>Login</Button>
          </Col>
          </Row>
        </Form>
      </Col>
    </Row>
    );
}