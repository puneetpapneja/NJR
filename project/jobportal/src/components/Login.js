import {Form,Button,Container,Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default function Login(){
    return(
        <Container>
            <Form>
                <Row>
                    <h1 className='text-center'>Login</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <br />
                        <Form.Control type='text' />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <br />
                        <Form.Control type='text' />
                    </Form.Group>
                </Row>
                <Row>
                    <Container className='float-start'>
                        
                    <Button variant='btn btn-success' to={"/register"}>Register</Button>
                    Don't have an account? Register Now
                    </Container>
                </Row>
                <Row>
                    <Button type='submit' variant='dark'>Login</Button>
                </Row>
            </Form>
        </Container>
    )
}