import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function PostedStructure(props){
    return(
        <Card as={Col} lg="3" md="10" className="m-auto">
            <Card.Body>
                <Card.Title>
                    <Row className="me-0">

                    <Col xs="6" lg="6">{props.Title}</Col>
                    <Col></Col>
                    <Col xs="4" lg="4" className="ps-0 float-end"><p className="float-end">{props.veiws}</p>
                    <Link to="/">
                        <i class="bi bi-eye float-end me-2 text-dark"></i>
                    </Link>
                    </Col>
                    </Row>
                </Card.Title>
                <Card.Subtitle>{props.Subtitle}</Card.Subtitle>
                <Card.Text>{props.description}</Card.Text>
                <Row>
                    <Col xs="1" lg="1" className="float-start"><i class="bi bi-trash3"></i></Col>
                    <Col xs='10' lg="10"></Col>
                    <Col xs="1" lg="1" className="ps-0"><i class="bi bi-pencil-square"></i></Col>
                </Row>
            </Card.Body>
        </Card>
    );
}