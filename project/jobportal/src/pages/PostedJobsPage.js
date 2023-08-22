import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
// import { BsEyeFill, BsTrashFill, BsPencilSquare } from 'react-icons/bs';

const PostedJobsPage = () => {
  const postedJobs = [
    {
      title: 'Senior Developer',
      views: 125,
      company: 'Kp Developers',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      title: 'Full Stack Developer',
      views: 98,
      company: 'Tech Innovators',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
      title: 'UI/UX Designer',
      views: 75,
      company: 'Creative Designs Inc.',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    // Add more posted job entries here
  ];

  return (
    <Container className="py-4">
      <h2 className="text-left pl-3">Posted Jobs</h2>
      <Row>
        {postedJobs.map((job, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">{job.title}</h4>
                  <div>  
                 {job.views} <Badge bg="secondary"></Badge>
      
                    {/* <BsEyeFill className="mr-2" /> */}
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-2">
                  <p className="mb-0">{job.company}</p>
                </div>
                <Card.Text className="mt-2">{job.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  
                  <i class="bi bi-trash"></i>
                  
                  <i class="bi bi-pencil-square"></i>
                  
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostedJobsPage;
