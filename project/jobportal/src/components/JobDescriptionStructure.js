import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
export default function JobDescStruct (props){
    return(
        <Container as={Col} xs="10" md="8" className="bg-tertiary border pb-2">
            <Row className="bg-secondary-subtle">
                <Col className="fs-4">{props.title}</Col>
                <Col className="float-end me-5" md="2">
                    <Row>
                        Max salary:
                    </Row>
                    <Row>
                       {props.salary}
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="fs-4">Description</Col>
            </Row>
            <Row>
                <Col className="text-muted">{props.description}</Col>
            </Row>
            <Row as={Col} xs="8" md="5" className="mt-3 mx-auto">
                <Button variant="dark" type="Submit" className="float-start text-white text-center">Apply</Button>
            </Row>
        </Container>
    );
}