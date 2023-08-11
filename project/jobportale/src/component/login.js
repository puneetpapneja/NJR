import {Button, Form,Container,Row} from 'react-bootstrap';
import {useState} from 'react';
import {Link} from 'react-router-dom';
export default function Login(){
    
    //    function FormExample() {
    //         const [validated, setValidated] = useState(false);
          
    //         const handleSubmit = (event) => {
    //           const form = event.currentTarget;
    //           if (form.checkValidity() === false) {
    //             event.preventDefault();
    //             event.stopPropagation();
    //           }
          
    //           setValidated(true);
    //         };
    return (
       
        
    <Container className='container-form'>
       <Row>
       <h1 className='text-center'>Login</h1>
       </Row>
       {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
       <Form border=''>
       <Row>
       <Form.Label>Email address</Form.Label>
        <Form.Group controlId='formEmail'>
            
            <Form.Control className='input-login' type="email" />
        </Form.Group>
        </Row>
        <Row>
        <Form.Label>Password</Form.Label>
        <Form.Group controlId='formPassword'>
            <Form.Control className='input-login' type="password" />
        </Form.Group>
        </Row>
        <br/>
        <Row>
        {/* <Link to="">Dont have a account? Register Now</Link> */}
         <Link to=""> Dont have a account? Register Now</Link> 
        </Row><br/>
        <Container className='d-flex justify-content-between'>
        <Button type="submit" variant='dark'>Login</Button>
        </Container>
       </Form>
    </Container>
 
 )
    // }
}