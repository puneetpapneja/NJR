import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import data from "./resources/postedjobsdetails.json";

export default function AppliedJobs() {
  return (
    <Container>
      <CardHeader style={{ fontSize: "3rem" }}>
        <b>Applied Jobs</b>
      </CardHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "normal",
        }}
      >
        {data.map((data) => (
          <Card
            className="d-flex flex-direction-column justify-content-between"
            style={{
              width: "100%",
            }}
          >
            <Card.Body>
              <Container className="d-flex justify-content-between p-0">
                <Container>
                  <Card.Title>{data.position}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {data.company}
                  </Card.Subtitle>
                </Container>
                <span>{data.views}</span>
              </Container>
              <Card.Text>{data.description}</Card.Text>
              <Container
                className="d-flex"
                style={{ justifyContent: "flex-end" }}
              >
                Applied
              </Container>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}