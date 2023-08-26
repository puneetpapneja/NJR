import {Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/jobSlice';
import { useEffect } from 'react';
function WithHeaderStyledExample() {
  const jobs = useSelector(state => state?.job?.jobs);
  // const jobs = useSelector(state =>console.log(state));
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getAllJobs());
  },[dispatch])

  useEffect(()=> {
    return ()=> {
      dispatch(reset())
    }
  },[dispatch])
  console.log(jobs);
  // console.log(jobs);
  return (
    jobs.map((job)=>{const {job_title,
      description,
      max_salary}=job;
    return(
    <Card className='w-100 mb-3'>
    <Card.Header className='bg-secondary-subtle '><Row><Col><h6 className='mt-2' lg='6' md='6' xs='12' >{job_title}</h6></Col><Col md='6' xs='12' lg='6' className='mt-2'><h5 className='float-end mb-0'>Max Salary</h5><br/><p className='float-end fs-6 mb-0'>{max_salary}</p></Col></Row></Card.Header>
    <Card.Body>
      <Card.Title>{description}</Card.Title>
      <Card.Text className='fw-light'>
      {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.” The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. */}
      </Card.Text>
      <Button variant="dark">Apply</Button>
    </Card.Body>
  </Card>
  );
  }))}
export default WithHeaderStyledExample;