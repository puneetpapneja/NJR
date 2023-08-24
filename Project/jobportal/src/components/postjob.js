import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { postJob } from '../store/reducers/jobSlice';

const PostJob = () => {
  const [formData, setFormData] = useState({});
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state?.job?.isLoading);

  const handleTitleChange = (event) => {
    const title = event.target.value;
    setFormData({
      ...formData,
      jobTitle: title
    });
  };

  const handleDescChange = (event) => {
    const desc = event.target.value;
    setFormData({
      ...formData,
      jobDesc: desc
    });
  };

  const handleSalaryChange = (event) => {
    const salary = event.target.value;
    setFormData({
      ...formData,
      maxSalary: salary
    });
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      await dispatch(postJob(formData));
      // Clear the form inputs
      setFormData({});
      // You can show a success message to the user if needed
      alert('Job posted successfully!');
    } catch (error) {
      console.error('Error posting job:', error);
      // You can show an error message to the user if needed
      alert('Error posting job. Please try again later.');
    }
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Post a Job</h2>
      <Card>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="jobTitle" className="mb-4">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter job title"
                onChange={handleTitleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="jobDesc" className="mb-4">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter job description"
                onChange={handleDescChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="maxSalary" className="mb-4">
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter salary"
                onChange={handleSalaryChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Posting...' : 'Post'}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PostJob;
