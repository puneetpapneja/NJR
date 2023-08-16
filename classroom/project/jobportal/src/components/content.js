import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Box from './box';
export default function Content() {

    return (
        <>
        <Container className="mt-4">
    <h2 className="text-left" style={{ fontSize: "60px", color: "black" }}>
      Dashboard
    </h2>
  </Container>

  <Container className="my-4">
    <div className="row">
      <div className="col-md-4">
        <div className="card bg-danger text-white text-center p-5 m-5">
          <h3>7 </h3>
          <p>
            <b>Applied Job's</b>
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-success text-white text-center p-5 m-5">
          <h3>40</h3>
          <p>
            <b>Total Post</b>
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card bg-primary text-white text-center p-5 m-5">
          <h3>2 </h3>

          <p>
            <b>Today's Post</b>
          </p>
        </div>
      </div>
    </div>
  </Container>
</>
    );
}




