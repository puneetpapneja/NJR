import {Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { appliedcandidates, getAllJobs, reset } from '../store/reducers/jobSlice';
import { useEffect } from 'react';
import { appliedjobs } from '../store/reducers/userSlice';
function WithHeaderStyledExample() {
  const jobs = useSelector(state => state?.job?.jobs);
  const dispatch=useDispatch();
  const emailuser=useSelector(state=>state?.user?.email);
  const id=useSelector(state=>state?.user?.id);
  const firstname=useSelector(state=>state?.user?.firstname);
  const lastname=useSelector(state=>state?.user?.lastname);
  // const jobs = useSelector(state =>console.log(state));
  

  useEffect(()=> {
    dispatch(getAllJobs());
  },[])

  // useEffect(()=> {
  //   return ()=> {
  //     dispatch(reset())
  //   }
  // })
  // console.log(jobs);
 
  // console.log(jobs);
  return (
    jobs.map((job)=>{const {job_title,
      description,
      max_salary,_id,company_name}=job;
      const email= job.recruiter_dtls.emailId;
      const jobdata={
        id:id,
        fields:{_id,
        job_title,
        description,
        recruiter_dtls:{
          emailId:email
        }}
      }
      const userdata={
        id:_id,
        fields:{
        _id:id,
        firstName:firstname,
        lastName:lastname,
        emailId:emailuser}
      }
      // console.log(userdata);
      // console.log(jobdata);
    return(
    <Card className='w-100 mb-3'>
    <Card.Header className='bg-secondary-subtle '><Row><Col><h5 className='mt-2' lg='6' md='6' xs='12' >{job_title}</h5></Col>
    <Col xs='0' md='4' lg='4'></Col>
    <Col md='2' xs='12' lg='2' className='mt-2'><h6 className='mb-0'>Company Name</h6><p className='fs-6 mb-0'>{company_name}</p></Col></Row></Card.Header>
    <Card.Body>
      <Card.Title>Description</Card.Title>
      <Card.Text className='fw-light'>
      <Row>
      <Col>{description}</Col>
      </Row>
      </Card.Text>
      <Row>
      <Col>
      <Button xs='6' md='4' lg='4' variant="dark" onClick={()=>{dispatch(appliedjobs(jobdata));
      dispatch(appliedcandidates(userdata))}}>Apply</Button></Col>
       <Col xs='0' md='4' lg='6'></Col>
       <Col md='2' xs='12' lg='2' className='mt-2'><h6 className='mb-0'>Max Salary</h6><p className='fs-6 mb-0'>{max_salary}</p></Col>
       </Row>
    </Card.Body>
  </Card>
  );
  }))}
export default WithHeaderStyledExample;