import { Container, Form,Button } from 'react-bootstrap';
import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/JobSlice';




const Postjob = () => {
  const jobs = useSelector(state => state?.job?.jobs);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllJobs());
  },[])

  useEffect(()=> {
    return ()=> {
      dispatch(reset())
    }},[])

  // const renderJobs = () => {
  //   return jobs.map(job => {
  //     const {title, maxSalary, description} = job;
  //     return (
  //       <div className="d-flex justify-content-center">
  //       <Card>
  //         <Card.Header className="d-flex justify-content-between align-items-center">
  //           <span>{title}</span>
  //           <span>MAX Salary {maxSalary}</span>
  //         </Card.Header>
  //         <Card.Body>
  //           <Card.Title>Description</Card.Title>
  //           <Card.Text>
  //           {description}
      
  //           </Card.Text>
  //           <Button variant="primary">Apply</Button>
  //         </Card.Body>
  //       </Card>
  //     </div>
  //     )
  //   })
  // }
  const renderJobs =()=>{
  return jobs.map(job => {
    const{jobTitle,maxSalary,jobDescription,companyName}=job;
    return(
      <Container>
      <Card style={{ width: '79rem',marginTop:"20px" }}>
          <Card.Header>{jobTitle}<br/><span className='float-start'>{companyName}</span> <span className='float-end'>MAX Salary {maxSalary}</span></Card.Header>
            <Card.Body>
             <Card.Subtitle>Description</Card.Subtitle>
              <Card.Text>
                {jobDescription}
              </Card.Text>
              <Button variant="dark" type="submit" className="btn btn-dark"as={Link} to="/appliedjob">
              Apply
            </Button>
            <span className='float-end'>Max Salary</span>
            </Card.Body>
            <br/>
          </Card>
      </Container>

        
          

    )
  })
}
  return (
    <Container>
          
          <Form className="w-100 p-10" >
          <Row lg={3}>
            <Col>
           <h1>Jobs</h1>
           </Col>
           </Row>
           <Row >
            <Col>
            <div style={{width:"8rem"}}>
       <Form.Control
         type="search"
         placeholder="Search"
         aria-label="Search"
       /></div> </Col></Row>
       <Row></Row>
      
       </Form> 
    
      <Row ></Row>
    
       <Row  style={{marginTop:"50px"}}>
        <Col>
       {renderJobs()} 
       </Col>
       </Row> 

      
       </Container> 
  
);
  // return (
  //   <div className="wrapper">
  //     <Container className="vh-100">
  //       <h2 className="text-left mt-3 mb-4">Jobs</h2>
  //       <Form inline className="justify-content-center mb-3">
  //         <FormControl type="search" placeholder="Search" />
  //       </Form>
  //       {renderJobs()}        
  //     </Container>
    
  //   </div>
  // );
}


//            </Form><br/><br/>
//                  <Row xs={1} md={1} className="g-4">
//                  {Array.from({ length: 3 }).map((_, idx) => (
//         <Col key={idx}>
// const renderJobs =()=>{
//   return jobs.map(job => {
//     const{jobTitle,maxsalary,jobDescription,companyName}=job;
//     return(
//       <Card  border="dark" >
//           <Card.Header>{title}<span className='float-end'>{companyName}</span></Card.Header>
//             <Card.Body>
//              <Card.Subtitle>Description</Card.Subtitle>
//               <Card.Text>
//                 {jobDescription}
//               </Card.Text>
//               <Button variant="dark" type="submit" className="btn btn-dark"as={Link} to="/">
//               Apply
//             </Button>
//             <span className='float-end'>Max Salary</span>
//             </Card.Body>
//           </Card>

//     )
//   })
// }
//           <Card  border="dark" >
//           <Card.Header>Senior Developer<span className='float-end'>Company Name</span></Card.Header>
//             <Card.Body>
           
//               <Card.Subtitle>Description</Card.Subtitle>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             <Button variant="dark" type="submit" className="btn btn-dark"as={Link} to="/">
//               Apply
//             </Button>
//             <span className='float-end'>Max Salary</span>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//             </Form>
//          </Container>
// </div>
//     )
// }
export default Postjob;