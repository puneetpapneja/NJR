// import {Button, Form,Container,Row} from 'react-bootstrap';
// import {useState} from 'react';
// import { setKey, setSession } from "../utils";
// import { useNavigate } from "react-router-dom";
// // import {Link} from 'react-router-dom';

// export default function Login(){
  
//     const [validated, setValidated] = useState(false)
//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         setValidated(true);
//     }
//     const SwitchTo = () =>{
//         setSession("");
//         setKey("Regsitered");
//         navigate("/Register");
//     }
//     return (
       
//     <Container className='media-container ' style={{width:"400px"}} >
//        <Row>
//        <h1 className='text-center'>Login</h1>
//        </Row>
//        <Form noValidate validated={validated} onSubmit={handleSubmit}>
//        <Row className='mt-4'>
//         <Form.Group controlId='formEmail'>
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" />
//         </Form.Group>
//         </Row>
//         <Row className='mt-4'>
//         <Form.Group controlId='formPassword'>
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" />
//         </Form.Group>
//         </Row>
//         <Row className='mt-4'>
//         <Button variant="link" href="/Register" onClick={SwitchTo}>Dont have a account? Register Now</Button>
//         </Row>
//         <br/>
//         <Container className='text-center'>
//         <Button type="submit" variant='dark'>Login</Button>
//         </Container>
//        </Form>
//     </Container>
 
//  )
//     // }
// }
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
   const SwitchTo = () =>{
        sessionStorage.setItem('alreadyAccount', true);
        navigate("/");
    }
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
          <Button variant="link"  onClick={SwitchTo}>Already have an account? Login Now</Button>
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