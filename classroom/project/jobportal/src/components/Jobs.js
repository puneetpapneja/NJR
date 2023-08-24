import React, { useEffect } from "react";
import { Form } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, reset } from "../store/reducers/jobSlice";

export default function Jobs() {
  const jobs = useSelector((state) => state?.job?.jobs);
  const dispatch = useDispatch();
  console.log(jobs);
  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const renderJobs = () => {
    return jobs.map((items) => (
      <Card className="col-md-10 mt-4 m-auto">
        <Card.Header as="h5" className="d-flex justify-content-between" inline>
          <span>{items.title}</span>
          <>{items.maxSalary}</>
        </Card.Header>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{items.description}</Card.Text>
          <Button variant="dark">Apply</Button>
        </Card.Body>
      </Card>
    ));
  };
  return (
    <Form>
      <CardHeader style={{ fontSize: "50px", marginLeft: "8vw" }}>
        Jobs
      </CardHeader>{" "}
      {renderJobs()}
    </Form>
  );
}