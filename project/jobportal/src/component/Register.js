import React  from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {users} from "../store/reducers/userSlice"

function Register(){   
    const Navigate=useNavigate();
    // function handleclick(){
    //   Navigate("/Dashboard"); 
    // }

   
    
    const [emailId, setEmailid]=useState('');
    const [password, setpassword]=useState('');
    const [type, settype]=useState('');
    const dispatch=useDispatch();
 
    function submitdata(e){
    e.preventDefault();
    let usercredential={
      emailId,password,type
    }
    console.log(usercredential);

     dispatch(users(usercredential));
    }
   
 
   
    return (
        <Container className="login_page">
      <Row className="justify-content-center">
        <Col xs={12} md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Register</Card.Title>
              <Form  onSubmit={submitdata} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="emailId" value={emailId} onChange={(e)=>setEmailid(e.target.value)} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
                </Form.Group>
                <Form.Check
            inline
            label="Job seeker"
            type="radio"
           name="type"
           value="job seeker"
           onChange={(e)=>settype(e.target.value)}
          />
          <Form.Check
            inline
            label="Job Recruiter"
            type="radio"
            name="type"
             value="job recruiter"
            onChange={(e)=>settype(e.target.value)}
          
          />
           <br/> <br/>  <a href="/">Have not log-in? Log-in now</a> <br/>  <br/> 

               
                <Button variant="primary" type="submit"  >
                  Register
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    );
}

export default Register;

