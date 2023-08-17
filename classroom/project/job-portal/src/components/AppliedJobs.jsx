import React from "react";
import { Form } from "react-router-dom";
import SearchBar from "./SearchBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import jobData from "./resources/jobDetailData.json";
import CardHeader from "react-bootstrap/esm/CardHeader";
export default function AppliedJobs() {
  return (
    <Form>
      <CardHeader style={{ fontSize: "50px", marginLeft: "8vw" }}>
        Jobs
      </CardHeader>
      {/* <SearchBar nameClass="col-md-5" /> */}
      {jobData.map((items) => (
        <Card className="col-md-10 mt-5 m-auto">
          <Card.Header
            as="h5"
            className="d-flex justify-content-between"
            inline
          >
            <span>{items.jobtitle}</span>
            <>{items["max-salary"]}</>
          </Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>{items.description}</Card.Text>
            <Button variant="dark">Apply</Button>
          </Card.Body>
        </Card>
      ))}
    </Form>
  );
}
