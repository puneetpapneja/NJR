import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="wrapper">
      <Container className="mt-4">
        <h1 className="text-center mb-4">Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <Card className="bg-info text-white text-center p-4">
              <Card.Body>
                <Card.Title>Applied Jobs</Card.Title>
                <Card.Text className="h4 mb-0">7 jobs</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="bg-primary text-white text-center p-4">
              <Card.Body>
                <Card.Title>Total Posts</Card.Title>
                <Card.Text className="h4 mb-0">40 posts</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className="bg-success text-white text-center p-4">
              <Card.Body>
                <Card.Title>Today's Posts</Card.Title>
                <Card.Text className="h4 mb-0">2 posts</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ height: '350px' }}></div> 
      </Container>
     
    </div>
  );
};

export default Dashboard;
