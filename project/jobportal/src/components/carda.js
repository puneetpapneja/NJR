import { useEffect } from 'react';
import {Button,Row,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { showapplied } from '../store/reducers/userSlice';
function WithHeaderExample() {
  const appliedjobs=useSelector(state=>state?.user?.applied);
  // const appliedjobs=useSelector(state=>state?.user?.appliedjobs);
  const id=useSelector(state=>state?.user?.id);
  // console.log(id);
  // console.log(appliedjobs);
  const dispatch=useDispatch();
  useEffect(
    ()=>{
      dispatch(showapplied({_id:id}));
    },[dispatch, id]
  )
  if(!appliedjobs){
    return(
      <h1>you have not aplied for any job</h1>
    );
  }
  else{
  return (
    appliedjobs.map((job)=>{
      return(
      <Card className='w-100 rounded-0 bg-secondary-subtle'>
      <Card.Body>
      <Card.Title className='mb-0'><Row ><Col><h5  lg='6' md='6' xs='12' >{job.job_title}</h5></Col><Col lg='4' md='4' xs='0'></Col><Col md='2' xs='12' lg='2' className='mt-2'><p className='mb-0 fs-6'>3 minutes ago</p></Col></Row></Card.Title>
        <Card.Title>{job.recruiter_dtls.emailId}</Card.Title>
        <Card.Text className='fw-light mb-0'>
        {job.description}
        </Card.Text>
        <p className='text-end mb-0 mt-0'>Applied</p>
      </Card.Body>
    </Card>
    )})  
  );
  }

}

export default WithHeaderExample;