import React from "react";
import ContentStructure from "./Contentstructure";
import { Container,Col, Row } from "react-bootstrap";
export default function Content(){
    return(
        <Container>
            <Row>
                <Col md="2"></Col>
                <Col xs="12"md="8">
                    <h1 style={{fontSize:"4em",textAlign:"center"}}>Dashboard</h1>
                </Col>
            </Row>
            <Row>
                <Col md="1"></Col>
                <Col className="bg-info" xs="12" md="2" style={{marginTop:"100px",width:"250px",height:"150px"}}>
                    <ContentStructure title="7" subtitle="Applied Jobs" />
                </Col>
                <Col xs="12" md="1"></Col>
                <Col className="bg-danger" xs="12" md="2" style={{marginTop:"100px",width:"250px",height:"150px"}}>
                    <ContentStructure title="40" subtitle="Total Post" />
                </Col>
                <Col xs="12" md="1"></Col>
                <Col className="bg-primary" xs="12" md="2" style={{marginTop:"100px",width:"250px",height:"150px"}}>
                    <ContentStructure title="2" subtitle="Today's Posts" />
                </Col>
                <Col md="2"></Col>
            </Row>
        </Container>
    );
}