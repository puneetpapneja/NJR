import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormControl, InputGroup } from 'react-bootstrap';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/jobSlice';
const Appliedjob=()=>{
   const jobs = useSelector(state => state?.job?.jobs);
    const dispatch = useDispatch();
  
    useEffect(()=> {
      dispatch(getAllJobs());
    },[])
  
    useEffect(()=> {
      return ()=> {
        dispatch(reset())
      }
    },[])
    const renderJobs = () => {
    return jobs.map(job => {
      const {Job_title, description, max_salary} = job;
    return(
        <>
        <h1>hiieeeeee</h1>
        <Container fluid>
          <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <h1 style={{textAlign:"center"}}>Jobs</h1>
                    </Col>
                </Row>
    <Container>
 <Card style={{marginTop:"20px"}}>
      
      <Card.Header as="h5">{Job_title}</Card.Header>
      
      <Card.Body>
        <Card.Title> Description {description}</Card.Title>
        <Card.Title>Max Salary {max_salary}</Card.Title>
        <Row>
          <Col>
        <Button variant="dark">Apply</Button>
        </Col>
        <Col>
        <Card.Text as="h5" style={{marginLeft:"400px"}}>Max Salary:10k-20k</Card.Text>
        </Col>
        </Row>
      </Card.Body>
    </Card>
    </Container>
        </Container>
        </>
    )})}
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