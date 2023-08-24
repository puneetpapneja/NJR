import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
export default function JobDescStruct (props){
    return(
        <Container>
            <Row>
                <Col>{props.title}</Col>
                <Col className="float-end me-5">
                    <Row>
                        <p>Max:salary</p>
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
                <Col>{props.description}</Col>
            </Row>
            <Row>
                <Button variant="dark" type="Submit" className="float-start text-white text-center">Apply</Button>
            </Row>
        </Container>
    );
}