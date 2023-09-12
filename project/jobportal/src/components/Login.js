import {Form,Button,Container,Row, Alert, Col} from 'react-bootstrap';
import { setSession } from '../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginValidation } from '../store/reducers/userregisterSlice';
export default function Login(){
    const [email,setEmail]=useState("");
    const [password , setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailError,setEmailError]=useState("");
    const [validError,setValidError]=useState("");
    const status = useSelector(state=>state?.user?.isvalidUser);
    useEffect(()=>{
        if(status){
            setSession("isvaliduser");
            navigate("/");
        }
    },[status])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isValidEmail = (email) => {
    return email.includes('@gmail.com');
    }
    const isValidPassword = (password) => {
    const hasCapitalLetter = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasCapitalLetter && hasNumber && hasSpecialChar;
  };
    const Handleclick = (event) =>{
         if(!email || !isValidEmail(email)){
            event.preventDefault();
            setEmailError("*invalid email format");
            return;
        }
         if(!password || !isValidPassword(password)){
            event.preventDefault();
            setPasswordError("*Password must contain one capital,one special symbol");
            return;
        }
        dispatch(loginValidation({emailId:email,password:password}))
        if(!status)
        {
            event.preventDefault();
            setValidError("Invalid user");
        }
        else{
            setValidError("");
            setSession("logged in");
            navigate("/");
        }
  };
    return(
        <Container>
            <Form as={Col} sm="12" md="5" className='mx-auto'  style={{border:"2px solid",padding:"20px 70px",marginTop:"60px",boxShadow:"3px 4px 4px 0.5px black"}}>
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
                            placeholder="Enter your Email"
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
                            placeholder="Enter your Password"
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
                    <Container className='float-start mb-3 mt-3'>
                    <Button variant='link' as={Link} to="/register">Don't have an account? Register Now</Button>
                    </Container>
                </Row>
                <Row>
                    {validError && <Alert variant='danger'>{validError}</Alert>}
                    <Button type='submit' variant='primary' onClick={Handleclick} style={{width:"100px",marginLeft:"20px"}}>Login</Button>
                </Row>
            </Form>
        </Container>
    )
}