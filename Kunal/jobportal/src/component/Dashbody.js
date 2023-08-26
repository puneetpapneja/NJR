
import Container from 'react-bootstrap/Container';
import Box from "./Box"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashbody(){
  return(
     
     
<Container className='dashbody_css'>
      <Row>
      <h1>Dashboard</h1>
        <Col sm={12} md={6}  xl={4}>
          <div className="d-flex">
            <Box title="7" content="Applied" backgroundColor="red" />
          </div>
        </Col>
        <Col sm={12} md={6} xl={4}>
          <div className="d-flex">
            <Box title="40" content="Total Post" backgroundColor="green" />
          </div>
        </Col>
        <Col sm={12} md={6} xl={4}>
          <div className="d-flex">
            <Box title="2" content="Today Post" backgroundColor="purple" />
          </div>
        </Col>
      </Row>
    </Container>

  );
}
export  default Dashbody;

