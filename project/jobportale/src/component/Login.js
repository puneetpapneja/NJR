import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



 const Login = () => {
    return (
        <Container className='w-25'>
            <Row>
                <Col className='text-center'><h1>Login </h1></Col>
            </Row>
            <Row>
                <Col md="12">
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Col>
            </Row>
            <Row className='text-center'>
                <Link to="/Registerpage">Donot have account? Register</Link>
            </Row>
            <Row >
                <Col className='text-center'> 
                    <Button variant="outline-success">Submit</Button>
                </Col>
            </Row>
        </Container>
    )
}
export default Login