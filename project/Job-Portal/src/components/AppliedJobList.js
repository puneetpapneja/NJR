import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


export default function AppliedJobList () {
    return(
        <Container>
            <Row>
                AppliedJobList
            </Row>
            <Row>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                    />
                </Col>
            </Row>
            <br/>
            <Card>
            <Card.Header className="grid gap-0 row-gap-3 d-flex justify-content-between " >
                
                <span  className="p-1 g-col-6">
                    Senior software developers 
                </span>
    
                <span className="p-1 g-col-6">
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
            <Card.Header className="grid gap-0 row-gap-3 d-flex justify-content-between " >
                
                <span  className="p-1 g-col-6">
                    Car Driver
                </span>
    
                <span className="p-1 g-col-6">
                    Company Name
                </span>
                
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