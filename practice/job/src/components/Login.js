import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <Container className="float-start">
      
        <Button variant='link' as={Link} to={"/register"}>Register</Button  >Dont have an account?Register Now
        </Container>
        </Row><br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Login</Button>
        </Container>
       </Form>
    </Container>
 
 )
    // }
}