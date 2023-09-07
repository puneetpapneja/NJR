import Card from 'react-bootstrap/Card';

function Dashboard() {
  return (
<>
    <div className='container text-center'>
      <h1>Dashboard</h1>
    </div>
      <div className='container d-flex justify-content-center'>
      <Card border="info" style={{ width: '18rem' ,margin:'45px', height:'197px',backgroundColor:'Green'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>5</Card.Title>
        <Card.Text>
          Applied Jobs
        </Card.Text>
      </Card.Body>
    </Card>
      <Card border="danger" style={{ width: '18rem' ,margin:'45px', height:'197px', backgroundColor:'gray'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>15</Card.Title>
        <Card.Text>
          Total Post
        </Card.Text>
      </Card.Body>
    </Card>
      <Card border="warning" style={{ width: '18rem' ,margin:'45px', height:'197px',backgroundColor:'blue'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>2</Card.Title>
        <Card.Text>
        Today's Post
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
      </>
  );
}

export default Dashboard;