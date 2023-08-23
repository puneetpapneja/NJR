import React, { useEffect } from "react";
import { Form } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, reset } from "../store/reducers/jobSlice";
// import { Container, Row, Col } from "react-bootstrap";

export default function Jobs() {
  const jobs = useSelector((state) => state?.job?.jobs);
  const dispatch = useDispatch();
  console.log(jobs);
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  },[]);

  console.log (jobs)
  const renderJobs = () => {
    return jobs.map((items) => (
      <Card className="col-md-10 mt-5 m-auto">
        <Card.Header as="h5" className="d-flex justify-content-between" inline>
          <span>{items.title}</span>
          <>{items.maxSalary}</>
        </Card.Header>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{items.description}</Card.Text>
          <Button variant="dark">Apply</Button>
        </Card.Body>
      </Card>
    ));
  };
  return (
    <Form>
      <CardHeader style={{ fontSize: "50px", marginLeft: "8vw" }}>
        Jobs
      </CardHeader>{" "}
      {renderJobs()}
    </Form>
  );
}
// function Jobs () {
//   const JobsData =[
//     {
//       Position:"Senior software developers",
//       Company:"Company Name",
//       Description:"Now it's called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health."
//     },
//     {
//       Position:"Senior software developers",
//       Company:"Company Name",
//       Description:"Now it's called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health."
//     },
//     {
//       Position:"Senior software developers",
//       Company:"Company Name",
//       Description:"Now it's called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health."
//     },
//     {
//       Position:"Senior software developers",
//       Company:"Company Name",
//       Description:"Now it's called journaling. It's simply writing down your thoughts and feelings to understand them more clearly. And if you struggle with stress, depression, or anxiety, keeping a journal can be a great idea. It can help you gain control of your emotions and improve your mental health."
//     },
//   ]
//   return(
//       <Container>
//           <Row>
//               <h1>Jobs</h1>
//           </Row> 
//           <Form inline>
//               <Row>
//                   <Col>
//                   <Form.Control
//                       type="text"
//                       placeholder="Search"
//                   />
//                   </Col>
//               </Row>
//           </Form>
//           <br/>
//           <Row className="justify-content-between ">
//           {JobsData.map((data)=>(
//              <Card>
//               <Card.Header className="grid gap-0 row-gap-3 d-flex justify-content-between ">
//                 <span>
//                   {data.Position}
//                 </span>
//                 <>{data.Company}</>
//               </Card.Header>
//               <Card.Body>
//                 <Card.Text>
//                   {data.Description}
//                 </Card.Text>
//                 <Button variant="dark">Apply</Button>
//               </Card.Body>
//              </Card>
//             ))}
//           </Row>
          
//       </Container>
//   )
// }
// export default Jobs;

