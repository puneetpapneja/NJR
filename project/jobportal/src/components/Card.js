import {Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { appliedcandidates, getAllJobs, reset } from '../store/reducer/jobSlice';
import { useEffect } from 'react';
import { appliedjobs } from '../store/reducer/userSlice';
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
      max_salary,_id}=job;
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
    <Card.Header className='bg-secondary-subtle '><Row><Col><h6 className='mt-2' lg='6' md='6' xs='12' >{job_title}</h6></Col><Col md='6' xs='12' lg='6' className='mt-2'><h5 className='float-end mb-0'>Max Salary</h5><br/><p className='float-end fs-6 mb-0'>{max_salary}</p></Col></Row></Card.Header>
    <Card.Body>
      <Card.Title>{description}</Card.Title>
      <Card.Text className='fw-light'>
      {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. */}
      </Card.Text>
      <Button variant="dark" onClick={()=>{dispatch(appliedjobs(jobdata));
      dispatch(appliedcandidates(userdata))}}>Apply</Button>
    </Card.Body>
  </Card>
  );
  }))}
export default WithHeaderStyledExample;