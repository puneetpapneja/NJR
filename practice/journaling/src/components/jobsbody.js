import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import { Form, Button, Card } from "react-bootstrap";


function Jobs () {
    return(
        <Container>
            <Row>
                <h1>Jobs</h1>
            </Row> 
            <Form inline>
                <Row>
                    <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                    />
                    </Col>
                </Row>
            </Form>
            <br/>
            <Card>
                {/* <Card.Header as="h5">Senior software developers</Card.Header>
                <Card.Header as="h5" className="text-right">Company Name</Card.Header> */}
                <Card.Header className="grid gap-0 row-gap-3 d-flex" style={{justifyContent:"space-between" }}>
                
                        <span  className="p-1 g-col-6">
                        Senior software developers
                        </span>
                    
                    
                    
                        <span className="align-text-top d-right">
                        Company Name
                        </span>
                    
                    
                </Card.Header>
                <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>Now it's called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health.</Card.Text>
                <Button variant="dark">Apply</Button>
                </Card.Body>
            </Card>
            <br/>
            <Card>
                {/* <Card.Header as="h5">Senior software developers</Card.Header>
                <Card.Header as="h5" className="text-right">Company Name</Card.Header> */}
                <Card.Header className="grid gap-0 row-gap-3">
                    <Col className="p-2 g-col-6">
                    Car Driver
                    </Col>
                    <Col className="p-2 g-col-6">
                    Company Name
                    </Col>
                </Card.Header>
                <Card.Body>
                <Card.Title>Description</Card.Title>
                <Card.Text>Now it's called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health.</Card.Text>
                <Button variant="dark">Apply</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Jobs;