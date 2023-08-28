import {Container,Row,Form,Button} from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/reducers/userSlice";
import { postjob } from "../store/reducers/jobSlice";
export default function PostJob(){
    const [validated, setValidated] = useState(false);
    const [title, setTitle]=useState('');
    const [description, setDescription]=useState('');
    const [salary, setSalary]=useState('');
    const email=useSelector(state=>state?.user?.email);
    const id=useSelector(state=>state?.user?.id);
    const firstname=useSelector(state=>state?.user?.firstname);
    const lastname=useSelector(state=>state?.user?.lastname);
    const jobposted=useSelector(state=>state?.job?.jobposted);
    const companyname=useSelector(state=>state?.user?.companyName)
    const dispatch=useDispatch();
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            event.preventDefault();
            event.stopPropagation();
            dispatch(postjob(data));
        }

    }
    const data={
        job_title: title,
        description: description,
        max_salary: salary,
        company_name: companyname,
        recruiter_dtls:{
            firstName:firstname,
            lastName:lastname,
            emailId: email,
           _id:id}
    }
    return (
        <Container className="w-75 mt-5">
            <Row>
                 <h1 className="ms-3 mt-5 mb-3">Post Job</h1>
            </Row>
        <Form className="ms-5" noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group>
                      <Form.Label >Job Title</Form.Label>
                      <Form.Control type="text" onChange={(e)=>setTitle(e.target.value)} required/>
                      <Form.Control.Feedback type="invalid">
              please enter the title of the job
            </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group>
                      <Form.Label>Job Description</Form.Label>
                      <Form.Control as="textarea"  className="form-control" onChange={(e)=>setDescription(e.target.value)} required/>
                      <Form.Control.Feedback type="invalid">
              Enter the job description
            </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group>
                      <Form.Label>Max Salary</Form.Label>
                      <Form.Control type="text" onChange={(e)=>setSalary(e.target.value)} required/>
                      <Form.Control.Feedback type="invalid">
              Enter an estimate of salary
            </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <br/>
            <Container className="text-center">
                <Button type="submit" variant="dark">Post</Button>
            </Container>
        </Form>
        </Container>
    )
}