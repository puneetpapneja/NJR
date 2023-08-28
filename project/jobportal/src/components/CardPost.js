import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deletejob, postedjobs, reset } from '../store/reducers/jobSlice';
import { Col } from 'react-bootstrap';

function TextExample() {
  const email= useSelector(state=>state?.user?.email);
  const postedjob=useSelector(state=>state?.job?.postedjob);
  const dispatch= useDispatch();
  useEffect(()=>{
    dispatch(postedjobs({email:email}));
  },[dispatch,postedjob]);

  useEffect(()=> {
    return ()=> {
      dispatch(reset());
    }
  },[dispatch])
  console.log(email);
  console.log(postedjob);
  return(
    postedjob.map((jobs)=>{const {job_title,
      description,companyName, _id}=jobs
  return (
    <Col lg='4'>
    <Card style={{ width: '20rem', height:'11rem'}} className='mb-3'> 
      <Card.Body className='overflow-hidden'>
        <Card.Title>{job_title}<i class="bi bi-eye float-end"></i><p className='float-end me-2'>8</p></Card.Title>
        <Card.Subtitle className="mb-2 text-muted fw-light">{companyName}</Card.Subtitle>
        <Card.Text className='fw-light '>
          {description}<br/>
          <i class="bi bi-trash3" onClick={()=>dispatch(deletejob({id:_id}))}></i>
          <i class="bi bi-pencil-square float-end"></i>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )}
  ))
}

export default TextExample;