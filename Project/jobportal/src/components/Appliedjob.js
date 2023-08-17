import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
const appliedjob=()=>{
    return(
        <>
        <Container fluid>
          <Row>
            <h1>Jobs</h1>
          </Row>
           <Form>
            
        <Row className='d-flex justify-content-center'>

          <Col xs="8">
             <i className="bi bi-search"></i>
            <Form.Control
              type="text"
              className=" mr-sm-2 p"
            />
          </Col>
        </Row>
      </Form>
        </Container>
        </>
    )
}
export default appliedjob;