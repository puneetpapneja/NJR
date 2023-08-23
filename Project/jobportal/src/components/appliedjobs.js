import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';

const AppliedJobs = () => {
  const appliedJobs = [
    {
      id: 1,
      jobTitle: 'Senior Developer',
      emailId: 'seniordev@example.com',
      jobDesc: 'Join our team as a Senior Developer!',
      daysAgo: 3,
    },
    {
      id: 2,
      jobTitle: 'UI/UX Designer',
      emailId: 'designer@example.com',
      jobDesc: 'Exciting UI/UX Designer position available.',
      daysAgo: 1,
    },
  ];

  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleCardClick = (jobId) => {
    setSelectedJobId(jobId);
  };

  return (
    <Container>
      <h2 className="mt-4 mb-3">Applied Jobs</h2>
      {appliedJobs.map((job) => (
        <Card
          key={job.id}
          className={`mb-3 ${selectedJobId === job.id ? 'bg-primary text-white' : ''}`}
          onClick={() => handleCardClick(job.id)}
        >
          <Card.Body className="d-flex justify-content-between">
            <div>
              <h4>{job.jobTitle} ({job.id})</h4>
              <p>Email: {job.emailId}</p>
            </div>
            <div className="text-right">
              <p className="mb-0">{job.daysAgo} days ago</p>
              <p className="mb-0">Applied</p>
            </div>
          </Card.Body>
          <Card.Text className="p-3">{job.jobDesc}</Card.Text>
        </Card>
      ))}
      
    </Container>
  );
};

export default AppliedJobs;
