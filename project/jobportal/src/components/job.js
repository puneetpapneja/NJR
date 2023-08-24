// import React, { useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Container, Form, FormControl } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllJobs, reset } from "../store/reducers/jobSlice";

// function Appliedjob() {
//   const jobs = useSelector((state) => state?.job?.jobs);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getAllJobs());
//   }, []);

//   useEffect(() => {
//     return () => {
//       dispatch(reset());
//     };
//   }, []);
//   console.log(jobs);
//   const renderJobs = () => {
//     return jobs.map((job) => {
//       const { jobTitle, maxSalary, jobDescription } = job;
//       return (
//         <div className="d-flex justify-content-center">
//           <Card>
//             <Card.Header className="d-flex justify-content-between align-items-center">
//               <span>{jobTitle}</span>
//               <span>MAX Salary {maxSalary}</span>
//             </Card.Header>
//             <Card.Body>
//               <Card.Title>Description</Card.Title>
//               <Card.Text>{jobDescription}</Card.Text>
//               <Button variant="primary">Apply</Button>
//             </Card.Body>
//           </Card>
//         </div>
//       );
//     });
//   };
//   return (
//     <div className="wrapper">
//       <Container className="vh-100">
//         <h2 className="text-left mt-3 mb-4">Jobs</h2>
//         <Form inline className="justify-content-center mb-3">
//           <FormControl type="search" placeholder="Search" />
//         </Form>
//         {renderJobs()}
//       </Container>
//     </div>
//   );
// }

// export default Appliedjob;

import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Form, FormControl, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, reset } from "../store/reducers/jobSlice";

function Appliedjob() {
  const jobs = useSelector((state) => state?.job?.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  const renderJobs = () => {
    return jobs.map((job, index) => {
      // Add a unique key to each mapped element
      const { jobTitle, maxSalary, jobDescription } = job;
      return (
        <Col xs={12} md={6} lg={4} key={index}>
          <Card className="mb-4">
            <Card.Header className="d-flex justify-content-between align-items-center">
              <span>{jobTitle}</span>
              <span>MAX Salary {maxSalary}</span>
            </Card.Header>
            <Card.Body>
              <Card.Title>Description</Card.Title>
              <Card.Text>{jobDescription}</Card.Text>
              <Button variant="primary">Apply</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="wrapper">
      <Container fluid className="vh-100">
        <h2 className="text-left mt-3 mb-4">Jobs</h2>
        <Form inline className="justify-content-center mb-3">
          <FormControl type="search" placeholder="Search" />
        </Form>
        <Row>{renderJobs()}</Row> {/* Wrap the jobs in a Row */}
      </Container>
    </div>
  );
}

export default Appliedjob;
