import {Container,Row,Form,Button} from "react-bootstrap";
import { useState } from "react";
export default function PostJob(){
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
    }
    return (
        <Container className="w-75 mt-5">
            <Row>
                 <h1 className="ms-3 mt-5 mb-3">Post Job</h1>
            </Row>
        <Form className="ms-5" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group>
                      <Form.Label >Job Title</Form.Label>
                      <Form.Control type="text" required/>
                      <Form.Control.Feedback type="invalid">
              please enter the title of the job
            </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group>
                      <Form.Label>Job Description</Form.Label>
                      <Form.Control as="textarea"  className="form-control" required/>
                      <Form.Control.Feedback type="invalid">
              Enter the job description
            </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group>
                      <Form.Label>Max Salary</Form.Label>
                      <Form.Control type="text" required/>
                      <Form.Control.Feedback type="invalid">
              Enter an estimate of salary
            </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <br/>
            <Container className="text-center">
                <Button type="submit" variant="dark">Post</Button>
            </Container>
        </Form>
        </Container>
    )
}