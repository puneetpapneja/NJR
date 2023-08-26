import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";

export default function AppliedJob() {
  const jobData = [
    {
      position: "Frontend Developer",
      salary: "€70,000",
      description:
        "We are looking for a skilled Frontend Developer to join our team...",
    },
    {
      position: "Backend Engineer",
      salary: "€80,000",
      description:
        "We are seeking a talented Backend Engineer to work on the server-side logic...",
    },
  ];

  return (
    <Container className="mt-5 postajobform" style={{ width: "55vw" }}>
      <h1 className="mb-4">Applied Jobs</h1>
      <Form>
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            className="mb-5 rounded-4 border-dark"
            style={{ height: "6vh", width: "55vw" }}
            placeholder="Search jobs"
          />
        </Form.Group>
      </Form>
      {jobData.map((job, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <div
              className="d-flex justify-content-between align-items-center p-1"
              style={{ backgroundColor: "#E0E0E0" }}
            >
              <h5>{job.position}</h5>
              <div>
                <h6>Max Salary</h6>
                <p className="text-muted">{job.salary}</p>
              </div>
            </div>
            <h6 className="mt-2">Description</h6>
            <p>{job.description}</p>
            <Button
              style={{
                backgroundColor: "black",
                borderStyle: "none",
                width: "7vw",
              }}
            >
              Apply
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
