import { Container, Form, Button, } from 'react-bootstrap';
//import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { createJobs } from '../store/reducers/jobSlice';

const Postjob = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title,setTitle]=useState("");
  const[description,setDescription]=useState("");
  const [salary,setMaxSalary]=useState("");
  function handelsubmit(event){
    const postdata={jobTitle:title,jobDescription:description, maxSalary:salary,};
    console.log(postdata);
    dispatch(createJobs(postdata))
    if(postdata!==""){
      navigate("/postedjob")

  }}

  return (
    <Container className="d-flex justify-content-sm-center">
      <Form  onSubmit={(e)=>{handelsubmit(e)}}  className="w-25 p-1" >
        <div className="shadow-sm p-3 mb-5 bg-white rounded">
          <h1 className="d-flex justify-content-center">Post Job</h1>

          <Form.Group className="mb-3" controlId="formBasicjobtitle">
          <Form.Label>Job Title</Form.Label>
  <input type='text' onChange={(e)=>{setTitle(e.target.value)}}></input>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicdescription">
          <Form.Label>Job Description</Form.Label>
  <input type='text' onChange={(e)=>{setDescription(e.target.value)}}></input>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicsalary">
          <Form.Label>Max Salary</Form.Label>
  <input type='text' onChange={(e)=>{setMaxSalary(e.target.value)}}></input>
          </Form.Group>

          <div class=" mx-auto">
            <Button variant="dark" type="submit" class="btn btn-dark" >
              POST
            </Button>
          </div>
        </div>
      </Form>
    </Container>
  )
}
export default Postjob;