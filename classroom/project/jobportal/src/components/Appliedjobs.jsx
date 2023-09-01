import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllForUser, reset } from "../store/reducers/jobSlice";

export default function Appliedjobs() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state?.user?._id);
  const jobs = useSelector((state) => state?.job?.jobs);
  const data = {
    id: id,
  };
  useEffect(() => {
    dispatch(getAllForUser(data));
  }, [dispatch]);
  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const renderJobs = () => {
    console.log(jobs);
    return jobs.map((job) => {
      return (
        <Card style={{ width: "90%", marginBottom: "1%" }}>
          <Card.Body className="d-flex flex-column">
            <Row>
              <Card.Title>{job.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Email</Card.Subtitle>
              {/* <Col className="text-end">3 days Ago</Col> */}
            </Row>
            <Card.Text>{job.description}</Card.Text>
            <span>
              <b>Applied</b>
            </span>
          </Card.Body>
        </Card>
      );
    });
  };
  return (
    <Container>
      <Row>
        <h1 style={{ fontSize: "3em" }} className="mt-3 ms-5">
          Applied Jobs
        </h1>
      </Row>
      {renderJobs()}
    </Container>
  );
}
