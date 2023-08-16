import {Button, Form,Container,Row} from 'react-bootstrap';
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';

export default function Login(){

    const [validated, setValidated] = useState(false);
    const navigate=useNavigate();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        if(validated===true){
        navigate("/dashboard");}
    
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
            <Form.Control type="email" required/>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className='mb-3'>
        <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required />
            <Form.Control.Feedback type="invalid">
              Please set a password.
            </Form.Control.Feedback>
        </Form.Group>
        </Row>
        
        
        <Button variant="link" as={Link} to="/register" className='p-0 mb-3'>Dont have a account? Register Now</Button>
        {/* <Link to="">Dont have a account? Register Now</Link> */}
        <br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark' >Login</Button>
        </Container>
       </Form>
    </Container>
 )
    // }
}