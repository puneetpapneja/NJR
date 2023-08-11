import {Button, Form,Container,Row,Col} from 'react-bootstrap';
import {useState} from 'react';
import {Link} from 'react-router-dom';
export default function Register(){
    
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
       <h1 className='text-center'>Register</h1>
       </Row>
       {/* <Form noValidate validated={validated} onSubmit={handleSubmit}> */}
       <Form>
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
        <Row>
            <Col>
                    <Form.Check type="radio" label="Job Seeker" name ="role" id='Job-Seeker'/>
            </Col>
            <Col>
                    <Form.Check type="radio" label="Job Recruiter" name ="role" id='Job-Recruiter'/>
            </Col>
            </Row>
        <Row>
            {/* <Link to="">Dont have a account? Register Now</Link> */}
            <Container className="flow-start">
            <Button variant='link' as={Link} to={"/login"}>Already have an account? Login Now</Button> 
            </Container>
        </Row><br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Register</Button>
        </Container>
       </Form>
    </Container>
 
 )
    // }
}