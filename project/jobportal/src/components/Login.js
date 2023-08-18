import {Form,Button,Container,Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Login(){
    return(
        <Container>
            <Form>
                <Row>
                    <h1 className='text-center'>Login <i class="bi bi-person-circle"></i></h1>
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
                    <Button variant='link' as={Link} to={"/register"}>  Register </Button>  Don't have an account? Register Now
                    </Container>
                </Row>
                <Row className="submit">
                    <Button variant ='dark' as={Link} to={"/dashboard"} type='submit'>Login</Button>
                </Row>
            </Form>
        </Container>
    )
}