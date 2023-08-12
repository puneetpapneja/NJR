import React from "react";
import ContentStructure from "./ContentStructure";
import { Container,Col, Row } from "react-bootstrap";
export default function Content(){
    return(
        <Container>
            <Row>
                <Col md="2"></Col>
                <Col xs="12"md="8">
                    <h1 style={{fontSize:"4em"}}>Dashboard</h1>
                </Col>
            </Row>
            <Row>
                <Col md="2"></Col>
                <Col className="bg-info" xs="12" md="2">
                    <ContentStructure title="8" subtitle="Applied Jobs" />
                </Col>
                <Col xs="12" md="1"></Col>
                <Col className="bg-danger" xs="12" md="2">
                    <ContentStructure title="8" subtitle="Applied Jobs" />
                </Col>
                <Col xs="12" md="1"></Col>
                <Col className="bg-primary" xs="12" md="2">
                    <ContentStructure title="8" subtitle="Applied Jobs" />
                </Col>
                <Col md="2"></Col>
            </Row>
        </Container>
    );
}