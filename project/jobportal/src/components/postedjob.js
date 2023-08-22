import { Container, Form, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const postedjob = () => {

    return (
        <Container>
            <Form className="w-100 p-10" >
                <h1>Posted Job</h1>
                <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
        
            <Card.Body>
              <Card.Title>Senior Developer <span className='float-end'><i class="bi bi-eye"></i></span></Card.Title>
              <Card.Subtitle>kp developers</Card.Subtitle>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <i class="bi bi-trash"></i>
              <span className='float-end'><i class="bi bi-pencil-square"></i></span>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
            </Form>
        </Container>
    )
}
export default postedjob;