import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Form, FormControl, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/jobSlice';

function Jobs() {
  const jobs = useSelector(state => state?.job?.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);


  
  console.log(jobs);

  const renderJobs = () => {
    return jobs.map(job => {
      const { jobTitle, maxSalary, jobDesc, _id } = job; 
      return (
        <Col key={_id} className="mb-3">
          <Card className="h-100 w-100">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>{jobTitle}</span>
              <span>Salary {maxSalary}</span>
            </Card.Header>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>{jobDesc}</Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
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

export default Jobs;