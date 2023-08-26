import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

const AppliedJobsPage = () => {
  const appliedJobs = [
    {
      title: 'Senior Developer(1876)',
      email: 'kpdevelopers4844@gmail.com',
      timeAgo: '3 days ago',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Full Stack Developer(7642)',
      email: 'kpdevelopers4844@example.com',
      timeAgo: '1 day ago',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      title: 'Car Driver(5643)',
      email: 'kpdevelopers4844@example.com',
      timeAgo: '1 day ago',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];

  return (
    <Container className="py-4">
      <h2 className="text-center">Applied Jobs</h2>
      {appliedJobs.map((job, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Card.Title className="text-left">{job.title}</Card.Title>
            <div className="d-flex justify-content-between">
              <Card.Text>
                <strong>Email:</strong> {job.email}
              </Card.Text>
              <Card.Text>{job.timeAgo}</Card.Text>
            </div>
            <Card.Text>{job.description}</Card.Text>
            <Button variant="primary" className="float-right">
              Applied
            </Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default AppliedJobsPage;
