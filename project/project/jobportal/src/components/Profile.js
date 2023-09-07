import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {Row,Col} from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function profile(){
    return(
    <Container>
      <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <h1 style={{textAlign:"center"}}>Profile</h1>
                    </Col>
                </Row>
                <Container>
          
                <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="firstname" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Nmae</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      </Form>
      </Container>
     <Row className='mb-5'>
                    <Col lg="5"></Col>
                    <Col>
                        <Button variant='success' type='Submit' className='my-5 px-5 fs-5'>Submit</Button>
                    </Col>
                </Row>
    </Container>
    )
}