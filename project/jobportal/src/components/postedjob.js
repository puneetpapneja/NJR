import { Container, Form, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React,{useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from './store/reducers/jobSlice';

const Postedjob = () => {
  const jobs = useSelector(state=>state?.job?.jobs);
  console.log(jobs);
  const dispatch = useDispatch();

  useEffect(()=> {
    console.log("kanishka");
    dispatch(getAllJobs());
  },[dispatch])

  useEffect(()=> {
    return ()=> {
      dispatch(reset())
    }},[dispatch])

    const renderJobs =()=>{
    return (Array.isArray(jobs)?jobs.map((job)=>{ 
      const{jobTitle,jobDescription,companyName}=job;
      return (
          <Container>
              
            <Card style={{width:"20rem",marginRight:"25rem" }}>
          
              <Card.Body>
                <Card.Title>{jobTitle} <span className='float-end'><i class="bi bi-eye"></i></span></Card.Title>
                <Card.Subtitle>{companyName}</Card.Subtitle>
                <Card.Text>
                  {jobDescription}
                </Card.Text>
                <i class="bi bi-trash"></i>
                <span className='float-end'><i class="bi bi-pencil-square"></i></span>
              </Card.Body>
            </Card>
          </Container>
      )}):'')
 
}
return(  <Container>
          
  <Form className="w-100 p-10" >
  <Row lg={3}>
    <Col>
  <h1>Posted Job</h1>
   </Col>
   </Row>
</Form> 
<Row  style={{marginTop:"50px"}}>
<Col>
{renderJobs()} 
</Col>
</Row> 


</Container> 
);}
export default Postedjob;