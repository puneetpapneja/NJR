import React from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import JobsStructure from "./JobsStructure";

const Jobs = () => {
  return (
    <Container>
      <Row>
        <h1 style={{ fontSize: "3em" }} className="mt-3 ms-5">
          Applied Jobs
        </h1>
      </Row>

      <Row className="justify-content-center  mb-5">
        <Col lg="8" sm="8" className="justify-content-center m-4">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col lg='9'>
            <JobsStructure post='senior software engineer' company='kp developers' desc='With supporting text below as a natural lead-in to additional content.'/>
        </Col>
      </Row>
    </Container>
  );
};

export default Jobs;
