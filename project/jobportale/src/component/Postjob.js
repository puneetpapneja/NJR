import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


export const Post = () => {
    return (
        <Container className="w-50">
            <Row className="m-3"><h1>Post Job</h1></Row>
            <Row className="m-3">
                <h5>Job Title</h5>
                <FloatingLabel
                    controlId="floatingInput"
                    className="mb-3 "
                >
                    <Form.Control type="text" />
                </FloatingLabel>
            </Row>
            <Row className="m-3">
             <h5>Job Description</h5>
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                        as="textarea"
                        className="mb-3"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
            </Row>
            <Row className="m-3">
                <Col xs={12}>
                <h5>Max Salary</h5>
            <FloatingLabel
                    controlId="floatingInput"
                    className="mb-3"
                >
                    <Form.Control type="text" />
                </FloatingLabel>

                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                <Button variant="dark" className="mb-3" style={{fontSize:"22px"}}>Post</Button>
                </Col>
            </Row>
        </Container>
    )
}