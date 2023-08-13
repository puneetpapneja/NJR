import {Form,Button,Container,Row} from 'react-bootstrap';
import { setKey, setSession } from '../utils';
import { useNavigate } from 'react-router-dom';
export default function Login(){
    const navigate = useNavigate();
    const Handleclick = () =>{
        setSession("logged in");
        navigate("/");
    }
    const SwitchTo = () =>{
        setSession("");
        setKey("register");
        navigate("/Registeration");
    }
    return(
        <Container>
            <Form>
                <Row>
                    <h1 className='text-center my-5'>Login</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Email Address</Form.Label>
                        <br />
                        <Form.Control type='text' />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className='my-3'>Password</Form.Label>
                        <br />
                        <Form.Control type='text' />
                    </Form.Group>
                </Row>
                <Row>
                    <Container className='float-start mb-5 mt-3'>
                    <Button variant='link' href='/Registeration' onClick={SwitchTo}>Don't have an account? Register Now</Button>
                    </Container>
                </Row>
                <Row>
                    <Button type='submit' variant='dark' onClick={Handleclick}>Login</Button>
                </Row>
            </Form>
        </Container>
    )
}