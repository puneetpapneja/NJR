import React from 'react';
import { Container, Card } from 'react-bootstrap';

export default function AppliedJob() {
    const jobData = [
        {
            position: 'Senior Developer',
            vacancies: 5676,
            recruiterEmail: 'recruiter@example.com',
            daysAgo: 3,
            details: 'We are looking for a skilled Senior Developer...',
        },
        {
            position: 'Full Stack Developer',
            vacancies: 5675,
            recruiterEmail: 'hr@example.com',
            daysAgo: 5,
            details: 'We are seeking a talented Full Stack Engineer...',
        },
        {
            position: 'Car Driver',
            vacancies: 5679,
            recruiterEmail: 'designer@example.com',
            daysAgo: 2,
            details: 'Join our team as a Car Driver...',
        },
    ];

    return (
        <Container className='mt-4'>
            <h1 className='mb-4'>Applied Job</h1>
            <div className='d-flex flex-wrap'>
                {jobData.map((job, index) => (
                    <Card key={index} className='mb-3 me-3' style={{ width: '100%' }}>
                        <Card.Header className='d-flex justify-content-between'>
                            <div>
                                <h5>{job.position} ({job.vacancies})</h5>
                                <p className='mb-0'>{job.recruiterEmail}</p>
                            </div>
                            <p className='text-muted'>{job.daysAgo} days ago</p>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>{job.details}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <p className='text-end'>Applied</p>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </Container>
    );
}