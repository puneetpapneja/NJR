import React from "react";
import { Form, Button } from "react-bootstrap";

const formStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "6%",
};

export default function PostJob() {
  return (
    <Form style={formStyle}>
      <h1 className="mb-4">Post Job</h1>

      <Form.Group className="mb-3 col-md-4" controlId="jobTitle">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" placeholder="Enter job title" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-4" controlId="jobDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter job description"
          rows={4}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-md-4" controlId="maxSalary">
        <Form.Label>Max Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter max salary" />
      </Form.Group>

      <Button
        style={{ backgroundColor: "black", border: "none" }}
        type="submit"
      >
        Post
      </Button>
    </Form>
  );
}
