import React, { useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { FaEye, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs, deleteById } from '../store/reducers/jobSlice'; // Import the getAllJobs action from your Redux slice

const PostedJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state?.job?.jobs);

  useEffect(() => {
    dispatch(getAllJobs()); // Dispatch the action to fetch all jobs
  }, [dispatch]);

  const handleEyeClick = (jobId) => {
    // Handle clicks logic
  };

  const handleDelete = (jobId) => {
    dispatch(deleteById(jobId)); // Dispatch the deleteJobAsync action
  };

  // Add more handlers for editing if needed

  return (
    <Container>
      <h2 className="mt-4 mb-3 text-left">Posted Jobs</h2>
      <div className="d-flex flex-wrap">
        {jobs.map((job) => (
          <Card key={job._id} className="mb-3 mx-2" style={{ flex: '1 1 300px' }}>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5>
                    {job.jobTitle} ({job._id.substr(-4)})
                  </h5>
                </div>
                <div className="text-right">
                  <Button variant="link" onClick={() => handleEyeClick(job._id)}>
                    <FaEye /> {job.clicks}
                  </Button>
                </div>
              </div>
              <p>Description: {job.applicants}</p>
              <p>{job.jobDesc}</p>
              <div className="d-flex justify-content-between align-items-end mt-3">
                <div>
                  <Button variant="link" onClick={() => handleDelete(job._id)}>
                    <FaTrashAlt />
                  </Button>
                  <Button variant="link" >
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
