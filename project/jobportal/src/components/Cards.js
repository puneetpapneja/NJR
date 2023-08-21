import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../index.css";

function Cards() {
  return (
    <Container className='container'>
      <Row className='row1'>
        <Col><h2>Dashboard</h2></Col>
        
      </Row>
      <Row className='row2'>

        <Col className='col1'>
        <div className='carditems'>
          <h1>10</h1>
          <h3>Jobs</h3>
        </div>
        </Col>

        <Col className='col2'>
        <div className='carditems'>
          <h1>56</h1>
          <h3>Total Jobs</h3>
        </div>
        </Col>
        
        <Col className='col3'>
        <div className='carditems'>
          <h1>23</h1>
          <h3>New Post's</h3>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
