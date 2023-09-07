import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import NavbarComponent from "./navbar";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useLocation } from "react-router-dom";
import Footer from './footer';
import { useUser } from './UserContext';
const PostedJob = () => {
    // !This in JOBS page
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const { userEmail } = useUser();
    useEffect(() => {
        axios.get("http://localhost:8080/getusers")
            .then(response => {
                setUsers(response.data);
                setFilteredUsers(response.data);
            })
            .catch(err => console.log(err))
    }, []);

    const handleApplyClick = (username) => {
        // Make an API request to fetch user data
        axios.get(`http://localhost:7070/demo?username=${username}`)
            .then(response => {
                const userData = response.data;
                 // Log the fetched user data
                console.log(`User Email from Context: ${userEmail}`); // Log the fetched user data
            })
            .catch(err => console.log(err))
    }

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();

        const filteredResults = users.filter(user =>
            user && user.jobtitle && user.jobtitle.toLowerCase().includes(searchText)
        );

        setFilteredUsers(filteredResults);
        setSearchTerm(searchText); // Update the search term
    }


    return (
        <>
            <NavbarComponent />

            <Container className="mt-4">
                <input
                    onChange={handleSearch}
                    className="form-control mb-4"
                    type="search"
                    placeholder="Search by job title"
                    aria-label="Search"
                    value={searchTerm}
                />
                <Row>
                    {filteredUsers.map(user => (
                        <Col md={4} key={user._id}>
                            <Card style={{
                                backgroundImage: 'linear-gradient(95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64%)',
                                backgroundColor: '#39CCCC',
                            }} className="mb-4 custom-card">
                                <Card.Body>
                                    <Card.Title>{user.jobtitle}</Card.Title>
                                    <Card.Text className="mb-2 text-muted">{user.jobdesc}</Card.Text>
                                    <Card.Text>Salary: ${user.jobsal}</Card.Text>
                                    <Button variant="primary" onClick={() => handleApplyClick(user.username)}>Apply</Button>                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default PostedJob;
