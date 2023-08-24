import { Form,Button,Container,Row, Col,Alert } from "react-bootstrap";
import { setSession ,setKey} from "../utils/utils";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Register(){
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
      const Handelclick= (event) =>{
        if(!email || !isValidEmail(email))
        {
            event.preventDefault();
            setError("*invalid email format");
            return;
        }
        if(!password || !isValidPassword(password)){
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
 const switchto=()=>{
    //setSession("login")
    sessionStorage.removeItem("token");
    setKey("register");
    navigate("/");
  }
  const isValidPassword = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasCapitalLetter && hasNumber && hasSpecialChar;
  };
    return(
        <Container className="d-flex justify-content-center" style={{marginTop:"100px"}}>
       <Row>
      <Col xs={12} md={6} lg={12} style={{border:"2px solid",padding:"40px",boxShadow:"3px 4px 4px 0.5px black"}}>
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
          Don't have a account?<Link  onClick={switchto}>Register Now</Link>
          <Row  style={{marginLeft:"70px",marginTop:"10px"}}>
            <Col>
          <Button type="Submit" onClick={Handelclick}>Login</Button>
          </Col>
          </Row>
        </Form>
      </Col>
    </Row>
    </Container>
    );
}