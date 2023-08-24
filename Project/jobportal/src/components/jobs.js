// import React, { useEffect, useState } from 'react';
// import { Container, Card, Button, Form} from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllJobs, reset } from '../store/reducers/jobSlice';

// const JobsPage = () => {
//   const jobs = useSelector(state => state?.jobs?.jobs);
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     dispatch(getAllJobs());
//   },[])

//   useEffect(()=> {
//     return ()=> {
//       dispatch(reset())
//     }
//   })
//   const [selectedJobId, setSelectedJobId] = useState(null);

//   const handleCardClick = (jobId) => {
//     setSelectedJobId(jobId);
//   };


//   return (
    
//     <Container>
//       <h2 className="mt-4 mb-3 text-left">Jobs</h2>

//       <Form.Group controlId="jobSearch" className='mb-3'>
//         <Form.Control type="text" placeholder="Search jobs" />
//       </Form.Group>

//       {jobs.map((job) => (
//         <Card
//           key={job.id}
//           className={`mb-3 ${selectedJobId === job.id ? 'bg-primary text-white' : ''}`}
//           onClick={() => handleCardClick(job.id)}
//         >
//           <Card.Body className='mb-3'>
//             {/* Post and Company */}
//             <div className="d-flex justify-content-between align-items-end mt-3">
//               <h4>{job.jobTitle}</h4>
//               <div className="text-right">
//                 <p className="mb-0">Company Name:</p>
//                 <p className="mb-0">{job.companyName}</p>
//               </div>
//             </div>
//             <hr className="my-2" /> 
            
//             {/* Description */}
//             <h5 className="text-right">Description</h5>
//             <p>{job.jobDesc}</p>
//             <hr className="my-2" /> 
            
//             {/* Salary and Apply Button */}
//             <div className="d-flex justify-content-between align-items-end mt-3">
//               <Button variant="primary">Apply</Button>
//               <div className="text-right">
//                 <p className="mb-0">Max Salary</p>
//                 <p className="mb-0">{job.maxSalary}</p>
//               </div>
//             </div>
//           </Card.Body>
//         </Card>
//       ))}
//     </Container>
//   );
// };

// export default JobsPage;


import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Form, FormControl, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, reset } from '../store/reducers/jobSlice';

function Jobs() {
  const jobs = useSelector(state => state?.job?.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);


  
  console.log(jobs);

  const renderJobs = () => {
    return jobs.map(job => {
      const { jobTitle, maxSalary, jobDesc, _id } = job; 
      return (
        <Col key={_id} className="mb-3">
          <Card className="h-100 w-100">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>{jobTitle}</span>
              <span>Salary {maxSalary}</span>
            </Card.Header>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>{jobDesc}</Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="wrapper">
      <Container className="vh-100">
        <h2 className="text-left mt-3 mb-4">Jobs</h2>
        <Form inline className="justify-content-center mb-3">
          <FormControl type="search" placeholder="Search" />
        </Form>
        <Col>{renderJobs()}</Col>
      </Container>
    </div>
  );
}

export default Jobs;


