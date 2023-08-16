import {Form,Button,Container,Row, Alert} from 'react-bootstrap';
// import { setKey, setSession } from '../utils';
// import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Login(){
    const [email,setEmail]=useState("");
    const [password , setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError,setEmailError]=useState("");
    // const navigate = useNavigate();
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
        // else{
        //     setSession("logged in");
        //     navigate("/");
        // }
    }
    return(
        <Container className='d-flex justify-content-center'>
            <Form>
                <Row>
                    <h1 className='text-center my-5'>Login</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Email Address</Form.Label>
                        <br />
                        <Form.Control type='text' className='mb-3' onChange={(e)=>{
                                                setEmail(e.target.value);
                                                setEmailError("");
                                            }
                                    } />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Password</Form.Label>
                        <br />
                        <Form.Control type='text' onChange={(e)=>{
                                    setPassword(e.target.value);
                                    setPasswordError("");
                                        }
                            }/>
                    </Form.Group>
                </Row>
                <Row>
                    <Container className='float-start mb-4 mt-3'>
                    <Button variant='link' href='/Registeration' >Don't have an account? Register Now</Button>
                    </Container>
                </Row>
                <Row>
                    <Button type='submit' variant='dark' onClick={Handleclick}>Login</Button>
                </Row>
            </Form>
        </Container>
    )
}