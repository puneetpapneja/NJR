import {Col,Row,Button, Container, Form, } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React , {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/JobSlice';
const Appliedjob = () => {
    const jobs = useSelector(state => state?.job?.jobs);
    const id = useSelector(state=>state?.user?._id);
    const dispatch = useDispatch();
    const data = {
        id:id
    }
  
    useEffect(()=> {
      dispatch(getAllJobs());
    },[])
  
    useEffect(()=> {
      return ()=> {
        dispatch(reset())
      }},[])

const renderJobs =()=>{
    return jobs.map(job => {
        const{jobTitle,jobDescription,companyName,email}=job;
        return(
        <Container>
            
                <Card style={{ width: '70rem' ,marginTop:"20px",background:"grey" }}>
                    <Card.Body>
                        <Card.Title>{jobTitle}<div className='float-end'>{TimeRanges}</div></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                        <Card.Text>
                           {jobDescription}
                            <span className='float-end'>Applied</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
        
        </Container>
    )
})}
return(
    <Container>
          
    <Form className="w-100 p-10" >
    <Row lg={3}>
      <Col>
  <h1>Applied Job</h1>
     </Col>
     </Row>
 </Form> 

 <Row  style={{marginTop:"50px"}}>
  <Col>
 {renderJobs()} 
 </Col>
 </Row> 


 </Container> 

);

}
export default Appliedjob;