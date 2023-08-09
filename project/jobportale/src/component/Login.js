import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';



export const Login = () => {
    return (
        <Container>
            <Row>
                <Col sm={5}></Col>
                <Col><h1>Login </h1></Col>
                <Col></Col>
            </Row>
            <Row>
            <Col></Col>
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
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md="12">
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
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                <a href='#'>Donot have account? Register</a>
                </Col>
                <Col></Col>
                
            </Row>
            <Row >
                <Col md="5"></Col>
                <Col>
                    <Button variant="outline-success">Submit</Button>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}