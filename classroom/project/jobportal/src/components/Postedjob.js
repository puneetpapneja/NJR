import React from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function PostedJob() {
    const jobData = [
        {
            position: 'Frontend Developer',
            interestedCandidates: 10,
            company: 'ABC Inc.',
            details: 'We are looking for a skilled Frontend Developer to join our team...',
        },
        {
            position: 'Backend Engineer',
            interestedCandidates: 8,
            company: 'XYZ Corp.',
            details: 'We are seeking a talented Backend Engineer to work on the server-side logic...',
        },
        {
            position: 'UI/UX Designer',
            interestedCandidates: 5,
            company: 'DesignTech',
            details: 'Join our design team to create intuitive and visually appealing user interfaces...',
        },
        {
            position: 'Data Scientist',
            interestedCandidates: 7,
            company: 'DataWise',
            details: 'Looking for a Data Scientist to analyze and interpret complex data...',
        },
    ];

    return (
        <Container className='mt-4'>
            <h1 className='mb-4'>Posted Job</h1>
            <div className='d-flex flex-wrap'>
                {jobData.map((job, index) => (
                    <Card key={index} className='mb-4 me-4' style={{ width: '18rem' }}>
                        <Card.Header className='d-flex justify-content-between'>
                            <span>{job.position}</span>
                            <span>
                                <i className='bi bi-eye'></i> {job.interestedCandidates}
                            </span>
                        </Card.Header>
                        <Card.Body>
                            <h6 className='mb-2'>{job.company}</h6>
                            <p className='mb-0'>{job.details}</p>
                        </Card.Body>
                        <Card.Footer className='d-flex justify-content-between'>
                            <i className='bi bi-trash'></i>
                            <i className='bi bi-pencil-square'></i>
                        </Card.Footer>
                    </Card>
                ))}
            </div>
        </Container>
    );
}