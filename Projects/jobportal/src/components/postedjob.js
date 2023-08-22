import React from "react";
import { Card, Row, Col } from "react-bootstrap";
export default function Posted() {
    return(
        <>
            <Row>
                <Col lg="1"></Col>
                <Col lg="10">
                    <h1 style={{ textAlign: "center" }}>Posted Job</h1>
                </Col>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Card style={{ width: "30rem" }}>
                    <Card.Body>
                        <Card.Title style={{ display: "flex" }}> Senior Developer(1254) <svg xmlns="http://www.w3.org/2000/svg"
                            width={30} height={32} fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"  ></svg>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">KP developer</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, beatae necessitatibus magnam sunt quo dolores expedita molestiae similique possimus ullam ab perspiciatis nulla corporis, saepe quibusdam. Ex natus quibusdam laudantium?
                        </Card.Text>
                    </Card.Body>
                    <Row >
                        <Col> <svg xmlns="http://www.w3.org/2000/svg"
                            width={30} height={32} fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"  ></svg>
                        </Col>
                        <Col style={{ marginLeft: "170px", marginBottom: "20px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width={30} height={32} fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"  ></svg>
                        </Col>
                    </Row>
                </Card>
                <Card style={{ width: "30rem" }}>
                    <Card.Body>
                        <Card.Title style={{ display: "flex" }}> Senior Developer(4592) <svg xmlns="http://www.w3.org/2000/svg"
                            width={30} height={32} fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"  ></svg>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">KP developer</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, beatae necessitatibus magnam sunt quo dolores expedita molestiae similique possimus ullam ab perspiciatis nulla corporis, saepe quibusdam. Ex natus quibusdam laudantium?
                        </Card.Text>
                    </Card.Body>
                    <Row >
                        <Col> <svg xmlns="http://www.w3.org/2000/svg"
                            width={30} height={32} fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"  ></svg>
                        </Col>
                        <Col style={{ marginLeft: "170px", marginBottom: "20px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width={30} height={32} fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"  ></svg>
                        </Col>
                    </Row>
                </Card>
                <Card style={{ width: "30rem" }}>
                    <Card.Body>
                        <Card.Title style={{ display: "flex" }}> Senior Developer(8536) <svg xmlns="http://www.w3.org/2000/svg"
                            width={30} height={32} fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"  ></svg>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">KP developer</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, beatae necessitatibus magnam sunt quo dolores expedita molestiae similique possimus ullam ab perspiciatis nulla corporis, saepe quibusdam. Ex natus quibusdam laudantium?
                        </Card.Text>
                    </Card.Body>
                    <Row >
                        <Col> <svg xmlns="http://www.w3.org/2000/svg"
                            width={30} height={32} fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"  ></svg>
                        </Col>
                        <Col style={{ marginLeft: "170px", marginBottom: "20px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width={30} height={32} fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"  ></svg>
                        </Col>
                    </Row>
                </Card>
            </Row>

            </>
            )
}

