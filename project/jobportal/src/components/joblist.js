import { Container, Form,Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import React,{useEffect} from 'react';
//import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getAllJobs, reset} from '../store/reducers/jobSlice';



const Postedjob = () => {
   const jobs = useSelector(state => state?.job?.jobs);
   const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getAllJobs());
   },[])

   useEffect(() =>{
    return ()=>{
      dispatch(reset())
    }},[])
   
    const renderJobs = ()=>{
      return jobs.map(job => {
        const {jobTitle,maxSalary,jobDescription,companyName}=jobs;
          return (

            <Card style={{width: '79rem' }}>
              <Card.Header>{jobTitle}<br/><span className='float-start'>{companyName}</span></Card.Header>
              <Card.Body>
              <Card.Subtitle>Description</Card.Subtitle>
              <Card.Text>
                {jobDescription}
              </Card.Text>
              <Button variant = "dark" type ="submit" className="btn btn-dark" as={Link} to ="/">
                Apply
              </Button>
              <span className='float-end'>Max Salary</span>
              </Card.Body>
              <br/>
            </Card>
          )
      })
    }


    return(
      <Container>
        <Form className= "w-100 p-10">
          <h1>Jobs</h1>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />

        </Form>
        {renderJobs()}

      </Container>
    );
    }
    export default Postedjob;
//     return (
//         <Container>
//             <Form className="w-100 p-10" >
//                 <h1>Jobs</h1>
//                 <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//           </Form><br/><br/>
//                 <Row xs={1} md={1} className="g-4">
//                 {Array.from({ length: 3 }).map((_, idx) => (
//         <Col key={idx}>
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
//         </Container>
//     )
// }
// export default postedjob;