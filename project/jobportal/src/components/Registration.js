import React, { useState} from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { registerUser } from "../store/reducers/userSlice";

export const Registration = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const err = useSelector(state=>state?.user?.Error);
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCname] = useState("");
  const [type, settype] = useState("Job-seeker");

  // const postData = async (e) => {
  //   e.preventDefault();
  //   // console.log(Fname, Lname, Email, Password, Cname, type);
  //   var item = {firstName, lastName, emailId, password, type, companyName};

  //   const res = await fetch("/user/create", {
  //     method: "POST",
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     },
  //     body: JSON.stringify(item)
  //   })

  //   const data = await res.json();

  //   if(!data){window.alert("Registration fail")}

  //   else{window.alert("Registration successful")
  //   navigate('/')
  // }

  // }

  const postData = (event) => {
    const item = {firstName:firstName, lastName:lastName, emailId:emailId, password:password, type:type, companyName:companyName};
    console.log(item);
    dispatch(registerUser(item))
    if(err!==""){
      navigate('/')
    }
  }
  return (
    <>
      <div className="box">
        <Container className="mt-5 w-50 con object-fit-scale">  
          <Form>
            <Row className="mb-5">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Control
                  type="text"
                  placeholder="Enter FirstName"
                  onChange={(e) => setFname(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridlastname">
                <Form.Control
                  type="text"
                  placeholder="Enter LastName"
                  onChange={(e) => setLname(e.target.value)}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-5" controlId="formGridemail">
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formGridpassword">
              <Form.Control
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-5" controlId="formGridcompanyname">
              <Form.Control
                placeholder="Company Name"
                onChange={(e) => setCname(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Select
                defaultValue="Job-seeker"
                onChange={(e) => settype(e.target.value)}
              >
                <option>Job-seeker</option>
                <option>Job-recruiter</option>
              </Form.Select>
            </Form.Group>

            <Button variant="dark" className="mt-5" onClick={postData}>
              Submit
            </Button>
          </Form>

          <Button as={Link} to={"/dashboard"}>
            Dashboard
          </Button>
        </Container>
      </div>
    </>
  );
};
