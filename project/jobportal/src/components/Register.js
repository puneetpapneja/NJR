import { Form,Button,Container,Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Register(){
    return(
        <Container>
            <Row>
                <h1 className="text-center">Register</h1>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <br />
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <br />
                    <Form.Control type="text"/>
                </Form.Group>
            </Row>
            <Row>
            <Col>
                    <Form.Check type="radio" label="Job Seeker" name ="role" id='Job-Seeker'/>
            </Col>
            <Col>
                    <Form.Check type="radio" label="Job Recruiter" name ="role" id='Job-Recruiter'/>
            </Col>
            </Row>
            <Row>
                <Container className="float-start">
                    <Button variant="link" as ={Link} to={"/login "}>Already have an account? Login Now</Button>
                    
                </Container>
            </Row>
            <Row className="submit">
                <Button type="Submit" variant="dark">Register</Button>
            </Row>
        </Container>
    );
}