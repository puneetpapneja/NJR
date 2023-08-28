import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Form, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/jobSlice';

function Appliedjob() {
  const jobs = useSelector(state => state?.job?.jobs);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllJobs());
  },[])

  useEffect(()=> {
    return ()=> {
      dispatch(reset())
    }
  })

  const renderJobs = () => {
    return jobs.map(job => {
      const {title, maxSalary, description} = job;
      return (
        <div className="d-flex justify-content-center">
        <Card>
          <Card.Header className="d-flex justify-content-between align-items-center">
            <span>{title}</span>
            <span>MAX Salary {maxSalary}</span>
          </Card.Header>
          <Card.Body>
            <Card.Title>Description</Card.Title>
            <Card.Text>
            {description}
      
            </Card.Text>
            <Button variant="primary">Apply</Button>
          </Card.Body>
        </Card>
      </div>
      )
    })
  }
  return (
    <div className="wrapper">
      <Container className="vh-100">
        <h2 className="text-left mt-3 mb-4">Jobs</h2>
        <Form inline className="justify-content-center mb-3">
          <FormControl type="search" placeholder="Search" />
        </Form>
        {renderJobs()}        
      </Container>
    
    </div>
  );
}

export default Appliedjob;
