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
       
    <Container>
       <Row>
       <h1 className='text-center'>Login</h1>
       </Row>
       {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
       <Form>
       <Row>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" width="40px"/>
        </Form.Group>
        </Row>
        <Row>
        <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
        </Row>
        <br/>
        <Row>
        {/* <Link to="">Dont have a account? Register Now</Link> */}
        <a href="">Dont have a account? Register Now</a>
        </Row><br/>
        <Container className='text-center' id="blk1">
        <Button type="submit" variant='dark' id="bt1" >Login</Button>
        </Container>
       </Form>
    </Container>
 
 )
    // }
}