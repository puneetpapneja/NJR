import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
export default function Content() {
  const displayData = [
    {
      title: "2",
      subtitle: "Applied Jobs",
    },
    {
      title: "114",
      subtitle: "Total Posts",
    },
    {
      title: "50",
      subtitle: "Today's Posts",
    },
  ];
  return (
    <Container>
      <Row>
        <Col xs="12" md="8" className="my-3 ms-5">
          <h1 style={{ fontSize: "3em" }}>Dashboard</h1>
        </Col>
      </Row>
      <Row>
        {displayData.map((data) => (
          <Card
            style={{
              width: "18rem",
              height: "10rem",
              backgroundColor: "#8CF9FF",
              marginRight: "5%",
            }}
          >
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>{data.title}</Card.Title>
              <Card.Subtitle>{data.subtitle}</Card.Subtitle>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}
