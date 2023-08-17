import {Button, Form,Container,Row} from 'react-bootstrap';
import {useState} from 'react';
import { setKey, setSession } from "../utils";
import { useNavigate } from "react-router-dom";
// import {Link} from 'react-router-dom';

export default function Login(){
  
    const [validated, setValidated] = useState(false)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
    }
    const SwitchTo = () =>{
        setSession("");
        setKey("Regsitered");
        navigate("/Register");
    }
    return (
       
    <Container className='media-container ' style={{width:"400px"}} >
       <Row>
       <h1 className='text-center'>Login</h1>
       </Row>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className='mt-4'>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
        </Form.Group>
        </Row>
        <Row className='mt-4'>
        <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
        </Row>
        <Row className='mt-4'>
        <Button variant="link" href="/Register" onClick={SwitchTo}>Dont have a account? Register Now</Button>
        </Row>
        <br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Login</Button>
        </Container>
       </Form>
    </Container>
 
 )
    // }
}