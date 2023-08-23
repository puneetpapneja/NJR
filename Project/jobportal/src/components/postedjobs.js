import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaEye, FaTrashAlt, FaEdit } from 'react-icons/fa';

const PostedJobs = () => {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      post: 'Senior Developer',
      clicks: 0,
      applicants: 'John Doe',
      description: 'Join our team as a Senior Developer!',
    },
    {
      id: 2,
      post: 'UI/UX Designer',
      clicks: 0,
      applicants: 'Jane Smith',
      description: 'Exciting UI/UX Designer position available.',
    },
  ]);

  const handleEyeClick = (jobId) => {
    const updatedJobs = jobs.map((job) =>
      job.id === jobId ? { ...job, clicks: job.clicks + 1 } : job
    );
    setJobs(updatedJobs);
  };

  const handleDelete = (jobId) => {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);
  };

  // Add more handlers for editing if needed

  return (
    <Container>
      <h2 className="mt-4 mb-3 text-left">Posted Jobs</h2>
      <div className="d-flex flex-wrap">
        {jobs.map((job) => (
          <Card key={job.id} className="mb-3 mx-2" style={{ flex: '1 1 300px' }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h4>
                    {job.post} (Job Id: {job.id})
                  </h4>
                </div>
                <div className="text-right">
                  <Button variant="link" onClick={() => handleEyeClick(job.id)}>
                    <FaEye /> {job.clicks}
                  </Button>
                </div>
              </div>
              <p>Applicants: {job.applicants}</p>
              <p>{job.description}</p>
              <div className="d-flex justify-content-between align-items-end mt-3">
                <div>
                  <Button variant="link" onClick={() => handleDelete(job.id)}>
                    <FaTrashAlt />
                  </Button>
                  <Button variant="link" /* Add edit handler here */>
                    <FaEdit />
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default PostedJobs;
