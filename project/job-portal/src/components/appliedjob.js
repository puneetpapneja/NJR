import React from 'react';
import { Container, Form, Card, Button } from 'react-bootstrap';

export default function AppliedJob() {
    const jobData = [
        {
            position: 'Frontend Developer',
            salary: '€70,000',
            description: 'We are looking for a skilled Frontend Developer to join our team...',
        },
        {
            position: 'Backend Engineer',
            salary: '€80,000',
            description: 'We are seeking a talented Backend Engineer to work on the server-side logic...',
        },

    ];

    return (
        <Container className="mt-5">
            <h1 className="mb-4">Jobs</h1>
            <Form>
                <Form.Group controlId="search">
                    <Form.Control type="text" placeholder="Search jobs" />
                </Form.Group>
            </Form>
            {jobData.map((job, index) => (
                <Card key={index} className="mb-3">
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4>{job.position}</h4>
                            <p className="text-muted">{job.salary}</p>
                        </div>
                        <p>{job.description}</p>
                        <Button variant="primary">Apply</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}
