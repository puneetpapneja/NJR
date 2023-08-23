import { Button, Col, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export const Profile = () => {
    return (
        <>
        <Container>
        <Row><h1>Profile</h1></Row>
        <Row className='mb-5'>
         <Col className='align-center'>   
        <Container className='m-3 w-50 p-5'>
            <Form.Label htmlFor="inputPassword5">First</Form.Label><Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock" />
            <Form.Label htmlFor="inputPassword5">Last Name</Form.Label>
            <Form.Control
                type="text"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword5">email</Form.Label>
            <Form.Control
                type="email"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
            <Form.Label htmlFor="inputPassword5">Resume/CV</Form.Label>
            <Form.Control
                type="file"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
            />
            </Container>
            </Col>
            </Row>
            <Col className='text-center mb-3'><Button variant="dark" className="mb-1">Apply</Button></Col>
            </Container>


        </>

    )
}