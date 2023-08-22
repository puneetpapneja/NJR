import Card from 'react-bootstrap/Card';

function Dashboard() {
  return (
<>
    <div className='container text-center'>
      <h2>Dashboard</h2>
    </div>
      <div className='container d-flex justify-content-center'>
      <Card style={{ width: '18rem' ,margin:'45px', height:'197px',backgroundColor:'red'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>7</Card.Title>
        <Card.Text>
          Applied Jobs
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' ,margin:'45px', height:'197px', backgroundColor:'green'}}>
      <Card.Body style={{textAlign:'center',marginTop:"45px",color:'white'}}>
        <Card.Title style={{fontSize:"50px", fontWeight:'bold'}}>40</Card.Title>
        <Card.Text>
          Total Post
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' ,margin:'45px', height:'197px',backgroundColor:'purple'}}>
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