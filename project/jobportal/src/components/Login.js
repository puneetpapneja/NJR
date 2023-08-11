import {Button, Form,Container,Row} from 'react-bootstrap';
import {useState} from 'react';
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
    return (
       
    <Container className='border border-dark rounded p-3' >
       <Row>
       <h1 className='text-center'>Login</h1>
       </Row>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
        </Row>
        <br/>
        
        <Button variant="link">Dont have a account? Register Now</Button>
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