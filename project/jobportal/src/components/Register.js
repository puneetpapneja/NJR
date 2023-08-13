import { Form,Button,Container,Row, Col } from "react-bootstrap";
import { setKey, setSession } from "../utils";
import { useNavigate } from "react-router-dom";
export default function Register(){
    const navigate = useNavigate();
    const Handelclick= () =>{
        setSession("Registered");
        navigate("/");
    }
    const SwitchTo = () =>{
        setSession("");
        setKey("login");
        navigate("/Login");
    }
    return(
        <Container>
            <Form>
                <Row>
                    <h1 className="text-center my-5">Register</h1>
                </Row>
                <Row>
                    <Form.Group>
                        <Form.Label className="my-3">Email Address</Form.Label>
                        <br />
                        <Form.Control type="text"/>
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
                <br />
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
                    <Container className="float-start mb-5 mt-3">
                        <Button variant="link" href="/Login" onClick={SwitchTo}>Already have an account? Login Now</Button>
                    </Container>
                </Row>
                <Row>
                    <Button type="Submit" variant="dark" onClick={Handelclick}>Register</Button>
                </Row>
            </Form>
        </Container>
    );
}