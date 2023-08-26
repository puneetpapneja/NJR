import React, { useEffect } from "react";
import Col from "react-bootstrap/Col";
import { Container, Form, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, reset } from "../store/reducers/jobSlice";
import { FormControl } from "react-bootstrap";

export default function Jobs() {
  const jobs = useSelector((state) => state?.job?.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  const renderJobs = () => {
    return jobs.map((job) => {
      const { jobTitle, maxSalary, jobDescription } = job;
      return (
        <div className="d-flex justify-content-center" key={job.id}>
          <Card style={{ width: "300px" }}>
            {" "}
            {/* Set a fixed width */}
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>{jobTitle}</span>
              <span>MAX Salary {maxSalary}</span>
            </Card.Header>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>{jobDescription}</Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
  };

  return (
    <div className="wrapper">
      <Container className="vh-100">
        <h2 className="text-left mt-3 mb-4">Jobs</h2>
        <Form inline className="justify-content-center mb-3">
          <FormControl type="search" placeholder="Search" />
        </Form>
        <Col>{renderJobs()}</Col>
      </Container>
    </div>
  );
}
