import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <>
      <div className="wrapper">
        <Container className="mt-4">
          <h1 className="text-center mb-4">Dashboard</h1>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <Card className="bg-danger text-white text-center p-5">
                <Card.Body>
                  <Card.Text className="h4 mb-0"><h1>7</h1></Card.Text>
                  <Card.Title className="mb-3"><h4>Applied Jobs</h4></Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="bg-success text-white text-center p-5">
                <Card.Body>
                  <Card.Text className="h4 mb-0"><h1>40</h1></Card.Text>
                  <Card.Title className="mb-3"><h4>Total Posts</h4> </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="bg-warning text-white text-center p-5">
                <Card.Body>
                  <Card.Text className="h4 mb-0"><h1>2</h1></Card.Text>
                  <Card.Title className="mb-3"><h4>Today's Posts</h4> </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div style={{ height: '350px' }}></div>
        </Container>
    </div >
    </>
  );
};

export default Dashboard;
