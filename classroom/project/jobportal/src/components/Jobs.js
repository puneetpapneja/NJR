import React, { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardHeader from "react-bootstrap/esm/CardHeader";
import FormControl from "react-bootstrap/FormControl";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs, reset } from "../store/reducers/jobSlice";

export default function Jobs() {
  const jobs = useSelector((state) => state?.job?.jobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const renderJobs = (jobsArray) => {
    return jobsArray.map((items) => (
      <Card className="col-md-10 mt-4 m-auto" key={items.id}>
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

  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

   const filteredJobs = jobs.filter((item) =>
    // Search in title, description, and maxSalary
    item.title.toLowerCase().includes(searchText.toLowerCase()) ||
    item.description.toLowerCase().includes(searchText.toLowerCase()) ||
    item.maxSalary.toString().includes(searchText) // Convert maxSalary to string for comparison
  );

  return (
    <Form>
      <CardHeader style={{ fontSize: "50px", marginLeft: "8vw" }}>
        Jobs
        <Form className="d-flex mt-3">
          <FormControl
            type="search"
            placeholder="🔍 Search"
            className="me-2"
            aria-label="Search"
            value={searchText}
            onChange={handleSearchChange}
          />
          <Button variant="outline-primary">🔍</Button>
        </Form>
      </CardHeader>
      {filteredJobs.length > 0 ? (
        renderJobs(filteredJobs)
      ) : (
        <p>No matching jobs found.</p>
      )}
    </Form>
  );
}
