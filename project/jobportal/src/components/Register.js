import {Button, Form,Container,Row, Col} from 'react-bootstrap';
import {useState} from 'react';
// import {Link} from 'react-router-dom';

export default function Register(){
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
       
    <Container className='media-container ' style={{width:"400px"}}>
       <Row>
       <h1 className='text-center' >Register</h1>
       </Row>
       <Form noValidate validated={validated} onSubmit={handleSubmit}>
       <Row className='mt-4'>
        <Form.Group controlId='formEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
        </Form.Group>
        </Row>
        <Row className='mt-4'>
        <Form.Group controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
        </Row>
        <br/>
        <Row className='mt-2'>
            <Col xs='6'>
                <Form.Check type='radio' label='Job Seeker' name="role"/>
            </Col>
            <Col xs='6'>
                <Form.Check type='radio' label='Job Recruiter' name='role' />
            </Col>
        </Row>
        <br/>
        <Button variant="link" >Have an account? Login Now</Button>
        <br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Register</Button>
        </Container>
       </Form>
    </Container>
 
 )
}