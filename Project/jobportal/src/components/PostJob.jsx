import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const formStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "17vh",
};

export default function PostJob() {
  return (
    <Form style={formStyle}>
      <Form.Group className="mb-3 col-md-3" controlId="formBasicTitle">
        <Form.Label>Job Title</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3 col-md-3" controlId="formBasicMSalary">
        <Form.Label>Max Salary</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group className="text-center">
        <Button variant="dark" type="submit">
          Post
        </Button>
      </Form.Group>
    </Form>
  );
}