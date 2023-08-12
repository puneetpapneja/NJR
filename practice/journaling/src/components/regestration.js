import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function RegestrationForm () {
    return(
        <Row>
            <Form className="justify-content-between mx-auto align-items-center " style={{
            width: '40%',
            height: "550px",
            border: "2px solid black",
            borderRadius: "5px",
            boxShadow: "5px 4px 5px 4px",
            marginTop: "50px",
            backgroundColor: "gray",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Form.Group>
                <h2 style={{
                    textAlign: "center",
                    paddingTop: "20px"
                }}>
                    Sign Up
                </h2>
            </Form.Group>
            {/* NAME */}
            <Form.Group>
            <Form.Control type="name" placeholder="Your Name" style={{
                width: "400px",
                // textAlign: "center",
            }} />
            </Form.Group>
            {/* EMAIL */}
            <Form.Group>
            <Form.Control type="email" placeholder="Your Email" style={{
                width: "400px",
                // textAlign: "center",
            }} />
            </Form.Group>
            {/* PASSWORD */}
            <Form.Group>
            <Form.Control type="password" placeholder="Password" style={{
                width: "400px",
                // textAlign: "center",
            }} />
            </Form.Group>
            {/* REPEAR PASSWORD */}
            <Form.Group>
            <Form.Control type="password" placeholder="Repeat Your Password" style={{
                width: "400px",
                // textAlign: "center",
            }} />
            </Form.Group>
            {/* CHEAK BOX */}
            <Form.Group>
                <Col xs="auto" className="my-1 col-12 ">
                    <input value="test" type="checkbox" />
                    <label className="">I agree all statement in <a href="#">Terms of service</a> </label>
                </Col>
            </Form.Group>
            <Form.Group style={{
                textAlign: "center",
            }}>
                <Button variant="primary" type="submit" size="lg">
                    Regester
                </Button>
            </Form.Group>

        </Form>
        </Row>
        
    )
}
export default RegestrationForm;