<<<<<<< HEAD
=======
import { useState } from "react";
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05
import Button from "react-bootstrap/esm/Button"
import Col from "react-bootstrap/esm/Col"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
<<<<<<< HEAD

const Register = () => {
    return (
        <Container className="w-25 mt-5">

            <Row className="text-center">
                <h1>Register</h1>
                <Col xs={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Email address
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            password
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                </Col>
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Conform password
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xm={6}>
                    <Form.Check inline label="Job Seeker" name="group1" type="radio" />
                </Col>
                <Col>
                <Form.Check inline label="Job Recruiter" name="group1" type="radio" />
                </Col>

            </Row>
            <Row>
                <Col className="text-center">
                    <Button variant="success">Register</Button>
                </Col>
            </Row>

        </Container>
    )
=======
import { createReg } from "../store/reducer/RegSlice";
import { useDispatch, useSelector } from 'react-redux';


const Register=()=>{
    const dispatch = useDispatch();
    const [emailId, setEmail] = useState("");
    const [password, setpass] = useState("");
    const handle = () => {
        const params = {
            emailId: emailId,
            password: password
        };
        dispatch(createReg(params))
    };

    return (
        <Container className="w-25 mt-5">
            <Form>
                <Row className="text-center">
                    <h1>Register</h1>
                    <Col xs={12}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Email address
                            </InputGroup.Text>
                            <Form.Control
                                name="emailId"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(event) => { setEmail(event.target.value); } } />
                        </InputGroup>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                password
                            </InputGroup.Text>
                            <Form.Control
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(event) => { setpass(event.target.value); } } />
                        </InputGroup>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="inputGroup-sizing-default">
                                Conform password
                            </InputGroup.Text>
                            <Form.Control
                                name="password"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xm={6}>
                        <Form.Check inline label="Job Seeker" name="group1" type="radio" />
                    </Col>
                    <Col>
                        <Form.Check inline label="Job Recruiter" name="group1" type="radio" />
                    </Col>

                </Row>
                <Row>
                    <Col className="text-center">
                        <Button variant="success" onClick={handle}>Register</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
>>>>>>> 65e9158336d5a042ca5c7ae70651f25418c85e05

}
export default Register