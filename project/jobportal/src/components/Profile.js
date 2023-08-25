import {Form,Button,Container,Row, Alert, Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/reducers/userSlice';

export default function Profile(){
    const [email,setEmail]=useState("");
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName] = useState("");
    const [firstNameError,setFirstNameError] = useState("");
    const [lastNameError,setLastNameError]= useState("");
    const [emailError,setEmailError]= useState("");
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useSelector(state=>state?.user?._id);
    const err = useSelector(state=>state?.user?.Error);
    const Handleclick = (event)=>{
        if(!email || !emailRegExp.test(email))
        {
            event.preventDefault();
            setEmailError("*invalid email format");
            return;
        }
        if(!firstName)
        {
            event.preventDefault();
            setFirstNameError("*required");
            return;
        }
        if(!lastName)
        {
            event.preventDefault();
            setLastNameError("*required");
            return;
        }
        const data = {
            id:id,
            fields:{
                firstName:firstName,
                lastName:lastName,
                emailId:email
            }
        }
        dispatch(updateProfile(data));
        console.log("sent",data);
        if(!err)
        {
            navigate("/");
        }
    }
    return(
        <Container>
            <Form as={Col} sm="12" md="5" className='mx-auto'>
                <Row>
                    <h1 className='my-3'>Profile</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>First Name</Form.Label>
                        <br />
                        <Form.Control 
                            type='text' 
                            value={firstName}
                            onChange={(e)=>{
                                                setFirstName(e.target.value);
                                                setFirstNameError("");
                                            }
                                    }
                            className='mb-3'
                        />
                        {firstNameError && <Alert variant='danger'>{firstNameError}</Alert>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Last Name</Form.Label>
                        <br />
                        <Form.Control 
                            type='text'
                            value={lastName} 
                            onChange={(e)=>{
                                    setLastName(e.target.value);
                                    setLastNameError("");
                                        }
                            }
                        />
                        {lastNameError && <Alert variant='danger'>{lastNameError}</Alert>}
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Registered Email Address</Form.Label>
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
                    <Form.Label className='my-3'>Choose CV</Form.Label>
                        <Form.Control type='file' />
                    </Form.Group>
                </Row>
                <Row>
                    <Button type='submit' variant='dark' onClick={Handleclick} className='my-5'>Submit</Button>
                </Row>
            </Form>
        </Container>
    );
}