import {Form,Button,Container,Row, Alert, Col} from 'react-bootstrap';
import { setSession } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Login(){
    const [email,setEmail]=useState("");
    const [password , setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError,setEmailError]=useState("");
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
        }
        else{
            setSession("logged in");
        }
    }
    return(
        <Container>
            <Form as={Col} sm="12" md="5" className='mx-auto'>
                <Row>
                    <h1 className='text-center my-5'>Login</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Email Address</Form.Label>
                        <br />
                        <Form.Control 
                            type='text' 
                            value={email}
                            onChange={(e)=>{
                                                setEmail(e.target.value);
                                                setEmailError("");
                                            }
                                    }
                            className='mb-3'
                        />
                        {emailError && <Alert variant='danger'>{emailError}</Alert>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Password</Form.Label>
                        <br />
                        <Form.Control 
                            type='text'
                            value={password} 
                            onChange={(e)=>{
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                        }
                            }
                        />
                        {passwordError && <Alert variant='danger'>{passwordError}</Alert>}
                    </Form.Group>
                </Row>
                <Row>
                    <Container className='float-start mb-5 mt-3'>
                    <Button variant='link' as={Link} to="/register">Don't have an account? Register Now</Button>
                    </Container>
                </Row>
                <Row>
                    <Button type='submit' variant='dark' onClick={Handleclick} href='/' >Login</Button>
                </Row>
            </Form>
        </Container>
    )
}