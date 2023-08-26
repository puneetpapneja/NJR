import {Button, Form,Container,Row} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { setSession } from '../Utils';
import { useDispatch, useSelector } from 'react-redux';
import { postjob } from '../store/reducer/jobSlice';
import { validateUser } from '../store/reducer/userSlice';

export default function Login(){

    const [validated, setValidated] = useState(false);
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const isValidUser = useSelector(state => state?.user?.isValidUser);
    console.log(isValidUser);
    useEffect(()=> {
      if(isValidUser){
        setSession("isValidUser");
         navigate("/")
      }
  },[isValidUser])
    // console.log(error);
    const [email,setEmail]= useState('');
    const [password, setPassword]= useState('');
    const data={
      emailId:email,
      password:password
    }
    console.log(data);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
          // console.log("dfgh");
          event.preventDefault();
          event.stopPropagation();
        }
        
        else{
        // if(validated===true){
          // console.log("DF");
          event.preventDefault();
          event.stopPropagation();
        dispatch(validateUser(data));
        // if(error===""){
        //   console.log(error);
        //     setSession("1234");
        //     navigate("/");
        // }
        // else{
        //     dispatch(reset());
        // }
        }
    }
    const onclick=()=>{
      navigate("/Register");
      // return(
      //   <Registerpage/>
      // )
    }
    
    return (
       
    <Container  >
       <Row>
       <h1 className='text-center mt-5 mb-3'>Login</h1>
       </Row>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className='mb-3'>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e)=>setEmail(e.target.value)} required/>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} required />
            <Form.Control.Feedback type="invalid">
              Please set a password.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        
        
        <Button variant="link" onClick={onclick}  className='p-0 mb-3'>Dont have a account? Register Now</Button>
        {/* <Link to="">Dont have a account? Register Now</Link> */}
        <br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Login</Button>
        </Container>
       </Form>
    </Container>
 )
    // }
}