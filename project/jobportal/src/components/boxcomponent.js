import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


function Boxcomponent() {
       return (
        <>
        <h1 class="row justify-content-center"> Dashboard</h1>
        <CardGroup className='container'>
        <div className="row justify-content-center">
        <Card className="bg-info text-white text-center p-4" border="danger" bg='danger' style={{ width: '18rem' ,height:'12rem'  }}>
        <Card.Body>
          <Card.Title class="fs-1">7</Card.Title>
          <Card.Text class="fs-3">
          Applied Job's
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div className="row justify-content-center">
        <Card  className="bg-info text-white text-center p-4" border="success" bg='success' style={{ width: '18rem'  }}>
        <Card.Body>
          <Card.Title class="fs-1">40</Card.Title>
          <Card.Text class="fs-3">
          Total Post
          </Card.Text>
        </Card.Body>
      </Card>
      </div>

      <div className="row justify-content-center">
        <Card className="bg-info text-white text-center p-4" border="warning" bg='warning' style={{ width: '18rem'  }}>
        <Card.Body>
          <Card.Title class="fs-1">2</Card.Title>
          <Card.Text class="fs-3">
          Today's Post
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      

      
      </CardGroup>
      </>
       )
}
      export default Boxcomponent;
       
    /* {/* //     <div className='box1'>
    //     <h1 align="center">7</h1>
    //        <p align="center">Applied Jobs</p>
    //     </div>

    //   <div className='box2'>
    //   <h1 align="center">40</h1>
    //        <p align="center">Total Post</p>
    //  </div>

    //   <div className='box3'>
    //   <h1 align="center">2</h1>
    //        <p align="center">Today's post's</p>    
    //   </div>
    //   </CardGroup> */