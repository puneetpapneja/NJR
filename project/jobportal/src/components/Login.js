import {Button, Form,Container,Row} from 'react-bootstrap';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { setSession } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { reset, userLogin } from '../store/reducers/userSlice';

export default function Login(){

    const [validated, setValidated] = useState(false);
    const navigate=useNavigate();
    const dispatch= useDispatch();
    const error=useSelector(state=>state?.user?.error);
    console.log(error);
    const [email,setEmail]= useState('');
    const [password, setPassword]= useState('');
    const data={
      emailId:email,
      password:password
    }
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
        dispatch(userLogin(data));
        if(error===""){
          console.log(error);
            setSession("1234");
            navigate("/");
        }
        else{
            dispatch(reset());
        }
        }
    }
    const onclick=()=>{
      navigate("/register");
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