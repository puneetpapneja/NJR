// import {Button, Form,Container,Row, Col} from 'react-bootstrap';
// import {useState} from 'react';
// // import {Link} from 'react-router-dom';

// export default function Register(){
//     const [validated, setValidated] = useState(false)
//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         setValidated(true);
//     }
//     return (
       
//     <Container className='media-container ' style={{width:"400px"}}>
//        <Row>
//        <h1 className='text-center' >Register</h1>
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
//         <br/>
//         <Row className='mt-2'>
//             <Col xs='6'>
//                 <Form.Check type='radio' label='Job Seeker' name="role"/>
//             </Col>
//             <Col xs='6'>
//                 <Form.Check type='radio' label='Job Recruiter' name='role' />
//             </Col>
//         </Row>
//         <br/>
//         <Button variant="link" >Have an account? Login Now</Button>
//         <br/>
//         <Container className='text-center'>
//         <Button type="submit" variant='dark'>Register</Button>
//         </Container>
//        </Form>
//     </Container>
 
//  )
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