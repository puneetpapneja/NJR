import React from "react";
import { Container, Nav, Form,Button,Row, Col } from "react-bootstrap";



function BodyBash () {
    return(
        <Container>
            <Row>
                <h1>Deshbord</h1>
            </Row>
            <Row className="text-center position-relative ">
                <Col className=" p-4  d-inline-block border bg-success mb-2 bg-danger text-white  ">
                    <p>7</p>
                    <p>Applied Job's</p>
                </Col>
                <Col className=" p-4 d-inline-block border mb-2 bg-success  text-white " >
                    <p>40</p>
                    <p>Total Post</p>
                </Col>
                <Col className=" p-4 d-inline-block border bg-info  text-white">
                    <p>4</p>
                    <p>Today's Post</p>
                </Col>
            </Row>
        </Container>
    )
}
export default BodyBash;