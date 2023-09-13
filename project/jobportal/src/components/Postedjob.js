import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAllJobs, reset } from '../store/reducers/JobSlice';

const Postedjob = () => {
  const jobs = useSelector((state) => state?.job?.jobs);
  console.log(jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const renderJobs = () => {
    if (Array.isArray(jobs)) {
      return jobs.map((job, index) => {
        const { jobTitle, jobDescription, companyName } = job;
        return (
          <Container key={index}> {/* Add a unique key for each card */}
            <Card
              style={{
                width: '100%',
                margin: '20px 20px',
                background: 'grey',
                fontSize: '20px',
              }}
            >
              <Card.Body>
                <Card.Title>Job Title = {jobTitle}</Card.Title>
                <Card.Text>Job Description = {jobDescription}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        );
      });
    } else {
      return null; // Return null when there are no jobs to display
    }
  };

  return (
    <Container>
      <Form className="w-100 p-10">
        <Row lg={3}>
          <Col>
            <h1>Posted Job</h1>
          </Col>
        </Row>
      </Form>
      <Row style={{ marginTop: '50px' }}>
        <Col>{renderJobs()}</Col>
      </Row>
    </Container>
  );
};

export default Postedjob;
