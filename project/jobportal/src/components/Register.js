import { Form,Button,Container,Row, Col } from "react-bootstrap";
import { setSession } from "../utils";
import { useNavigate } from "react-router-dom";
const Handelclick= () =>{
    const navigate = useNavigate();
    setSession("Registered");
    navigate("/");
}
const SwitchTo = () =>{
    const navigate = useNavigate();
    setSession("log in");
    navigate("/Login");
}
export default function Register(){
    return(
        <Container>
            <Row>
                <h1 className="text-center">Register</h1>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label className="my-3">Email Address</Form.Label>
                    <br />
                    <Form.Control type="text"></Form.Control>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group>
                    <Form.Label className="my-3">Password</Form.Label>
                    <br />
                    <Form.Control type="text"/>
                </Form.Group>
            </Row>
            <Row>
            <Row>
            <br />
            </Row>
            <Col>
                    <Form.Check type="radio" label="Job Seeker" name ="role" id='Job-Seeker'/>
            </Col>
            <Col>
                    <Form.Check type="radio" label="Job Recruiter" name ="role" id='Job-Recruiter'/>
            </Col>
            </Row>
            <Row>
                <Container className="float-start my-3">
                    <Button variant="link" href="/Login" onClick={SwitchTo}>Already have an account? Login Now</Button>
                </Container>
            </Row>
            <Row>
                <Button type="Submit" variant="dark" onClick={Handelclick}>Register</Button>
            </Row>
        </Container>
    );
}