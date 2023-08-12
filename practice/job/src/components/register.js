import { Button, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
        <Form.Group controlId='Email Address'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
        </Form.Group>
        </Row>
        <Row>
        <Form.Group controlId='Password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
        </Form.Group>
        </Row>
        <br/>
        <Row>
        <Container className="float-start">
        <Button variant="link" as = {Link} to={"/login"}> Already have an Account ? Login in Now</Button>
        </Container>
    
        </Row><br/>
        <Container className='text-center'>
        <Button type="submit" variant='dark'>Register</Button>
        </Container>
       </Form>
    </Container>
 
 )
// }
}