import {Button, Form,Container,Row, Col} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { getSession } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, reset } from '../store/reducers/userSlice';


export default function Register(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const error= useSelector(state=>state?.user?.error);
    // const error = useSelector(state =>console.log(state.user.error));
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [type, setType]=useState('');
    const [company, setCompany]= useState('');
    const [validated, setValidated] = useState(false);
    useEffect(()=> {
        console.log("dbfnmmbf");
        if(getSession()){
            navigate("/");
        }
    },[navigate]);
    const data ={
        emailId: email,
        password: password,
        type: type,
        companyName: company
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
        dispatch(registerUser(data));
        setValidated(true);
        if(error===""){
            navigate("/login");
        }
        else{
            dispatch(reset());
        }
        }
    }
    const onclick=()=>{
        navigate("/login");
      }
    
      const [checkradio, setcheckradio]=useState(false);
    const handleradio=(event)=>{
        const form =event.currentTarget;
        setType(form.value);
        if(form.value==="J-r"){
           setcheckradio(true);
        }
        else{
           setcheckradio(false);
        }
    }
   
    return (
    <Container >
       <Row>
       <h1 className='text-center mt-5 mb-3' >Register</h1>
       </Row>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} required/>
            <Form.Control.Feedback type='invalid'>please enter a valid email</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} required/>
            <Form.Control.Feedback type='invalid'>please set a password</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <br/>
        <Row>
            <Col xs='6'>
                <Form.Check type='radio' label='Job Seeker' name="role" value="J-s" onChange={handleradio} inline feedback="please select any one" feedbackType='invalid' required/>
            </Col>
            <Col xs='6'>
                <Form.Check type='radio' label='Job Recruiter' value="J-r" name='role' onChange={handleradio} inline feedback="please select any one" feedbackType='invalid' required/>
            </Col>
        </Row>
        <br/>
        <Row>
        {checkradio &&
        <Form.Group controlId='formCompany'>
            <Form.Label>Company name</Form.Label>
            <Form.Control type="text" onChange={(e)=>setCompany(e.target.value)} required/>
            <Form.Control.Feedback type='invalid'>please enter a company name</Form.Control.Feedback>
        </Form.Group>}
        </Row>
        <Button variant="link" onClick={onclick}>Have an account? Login Now</Button>
        <br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Register</Button>
        </Container>
       </Form>
    </Container>
 
 )
}