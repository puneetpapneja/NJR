import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import NavbarComponent from "./navbar";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './jobs.css';
const Jobs = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/getusers")
            .then(response => setUsers(response.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <NavbarComponent></NavbarComponent>
            
            <Container className="mt-4">
                <Row>
                    {users.map(user => (
                        <Col md={4} key={user._id}>
                            <Card className="mb-4 custom-card">
                                <Card.Body>
                                    <Card.Title>{user.jobtitle}</Card.Title>
                                    <Card.Text>Discretion: {user.jobdesc}</Card.Text>
                                    <Card.Text>Salary: {user.jobsal}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default Jobs;