import React, { useState } from "react";
import { Form, Button, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { postNewJob } from "../store/reducers/postJobSlice";

const formStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "4%",
};

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maxSalary, setMaxSalary] = useState("");

  const dispatch = useDispatch();
  const postingStatus = useSelector((state) => state.postJob.postingStatus);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && maxSalary) {
      dispatch(postNewJob({ title, description, maxSalary }));
      setShowToast(true);
    }
  };

  return (
    <div>
      <Form style={formStyle} onSubmit={handleSubmit}>
        <h1 className="mb-4">Post Job</h1>

        <Form.Group className="mb-3 col-md-4" controlId="jobTitle">
          <Form.Label>Job Title</Form.Label>
          {/* <Form.Control type="text" placeholder="Enter job title" /> */}
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-4" controlId="jobDescription">
          <Form.Label>Job Description</Form.Label>
          {/* <Form.Control as="textarea" placeholder="Enter job description" rows={3} /> */}
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 col-md-4" controlId="maxSalary">
          <Form.Label>Max salary</Form.Label>
          {/* <Form.Control type="number" placeholder="Enter max salary" /> */}
          <Form.Control
            type="number"
            value={maxSalary}
            onChange={(e) => setMaxSalary(e.target.value)}
          />
        </Form.Group>

        <Button
          style={{ backgroundColor: "black", border: "none" }}
          type="submit"
        >
          Post
        </Button>
      </Form>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "green",
          color: "white",
        }}
        delay={3000} // Set the duration for how long the toast will be visible
        autohide
      >
        <Toast.Body>Job posted successfully!</Toast.Body>
      </Toast>
    </div>
  );
}
