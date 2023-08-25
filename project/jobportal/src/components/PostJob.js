import React from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createjob } from "../store/reducers/jobSlice";
import { createjob } from "../store/reducers/jobSlice";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobTitleError, setJobTitleError] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobDescriptionError, setJobDescriptionError] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [maxSalaryError, setMaxSalaryError] = useState("");
  const firstName = useSelector((state) => state?.user?.firstName);
  const lastName = useSelector((state) => state?.user?.lastName);
  const emailId = useSelector((state) => state?.user?.emailId);
  const companyName = useSelector((state) => state?.user?.companyName);
  const contactNo = 10000000;
  console.log(companyName);
  const dispatch = useDispatch();

  const Handleclick = (event) => {
    if (!jobTitle) {
      event.preventDefault();
      setJobTitleError("*Title required");
      return;
    }
    if (!jobDescription) {
      event.preventDefault();
      setJobDescriptionError("*Discription required");
      return;
    }

    if (!maxSalary) {
      event.preventDefault();
      setMaxSalaryError("*Please Enter Salary");
      return;
    }

    //   const postData = (event) => {
    //     const item = {firstName:firstName, lastName:lastName, emailId:emailId, password:password, type:type, companyName:companyName};
    //     console.log(item);
    //     dispatch(registerUser(item))
    //     navigate('/')
    //     if(err!==""){

    //     }
    //   }

    const item = {
      jobField: jobTitle,
      discription: jobDescription,
      maxSalary: maxSalary,
      companyName: companyName,
      recuriterDtl: { name: firstName, emailId: emailId, contactNo: contactNo },
    };
    console.log(item);

    dispatch(createjob(item));
    console.log("dispatched successfully of item - ", item)
  };
  return (
    <Container fluid>
      <Form>
        <Row>
          <Col lg="1"></Col>
          <Col lg="3">
            <h1 className="my-3">Post Job</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="2"></Col>
          <Col lg="8">
            <Form.Group>
              <Form.Label className="my-3">Job Title</Form.Label>
              <Form.Control
                type="text"
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                  setJobTitleError("");
                }}
              />
              {jobTitleError && <Alert variant="danger">{jobTitleError}</Alert>}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg="2"></Col>
          <Col lg="8">
            <Form.Group>
              <Form.Label className="my-3">Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                value={jobDescription}
                onChange={(e) => {
                  setJobDescription(e.target.value);
                  setJobDescriptionError("");
                }}
              />
              {jobDescriptionError && (
                <Alert variant="danger">{jobDescriptionError}</Alert>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col lg="2"></Col>
          <Col lg="8">
            <Form.Group>
              <Form.Label className="my-3">Max Salary</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) => {
                  setMaxSalary(e.target.value);
                  setMaxSalaryError("");
                }}
              />
              {maxSalaryError && (
                <Alert variant="danger">{maxSalaryError}</Alert>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg="5"></Col>
          <Col>
            <Button
              variant="dark"
              className="my-5 px-5 fs-5"
              onClick={Handleclick}
            >
              Post
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default PostJob;
