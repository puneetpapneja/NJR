import React, { useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { apply } from "../store/reducers/jobSlice";
export default function JobDescStruct(props) {
  const [applied, setApplied] = useState("");
  const _id = useSelector((state) => state?.user?._id);
  const emailId = useSelector((state) => state?.user?.emailId);
  const firstName = useSelector((state) => state?.user?.firstName);
  const lastName = useSelector((state) => state?.user?.lastName);
  const status = useSelector((state) => state?.status);
  const dispatch = useDispatch();
  const data = {
    id: props.props._id,
    fields: {
      _id: _id,
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    },
  };
  const handleApply = () => {
    setApplied("");
    dispatch(apply(data));
    if (!status) {
      setApplied("applied successfully");
    } else {
      setApplied("application unsucessfull retry");
    }
  };
  // console.log("this is props data",props.props)
  return (
    <Card>
      <Card.Header>
        <Card.Title>{props.props.title}</Card.Title>
        <>MaxSalary: {props.props.maxSalary}</>
      </Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>

        <Card.Text>{props.props.description}</Card.Text>
        <Button variant="dark" onClick={handleApply}>
          Apply
        </Button>
        {applied && <Alert>{applied}</Alert>}
      </Card.Body>
    </Card>
  );
}
