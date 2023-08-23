import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { postNewJob } from "../store/reducers/postJobSlice";
const formStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  margin: "17vh auto 10vh auto",
};

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const dispatch = useDispatch();
  const postingStatus = useSelector((state) => state.postJob.postingStatus);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && maxSalary) {
      // Dispatch the action to post new job
      dispatch(postNewJob({ title, description, maxSalary }));
    }
  };
  return (
    <Form style={formStyle} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 col-md-3" controlId="formBasicTitle">
        <Form.Label>Job Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3 col-md-3" controlId="formBasicDescription">
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3 col-md-3" controlId="formBasicMSalary">
        <Form.Label>Max salary</Form.Label>
        <Form.Control
          type="number"
          value={maxSalary}
          onChange={(e) => setMaxSalary(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="text-center">
        <Button variant="dark" type="submit">
          Post
        </Button>
      </Form.Group>
    </Form>
  );
}