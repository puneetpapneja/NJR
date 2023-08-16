import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const appliedjob=()=>{
    return(
        <>
        <Container fluid>
          <Row>
            <h1 className='text-center'>Jobs</h1>
          </Row>
            
           <Form>
            
        <Row className='d-flex justify-content-center'>

          <Col xs="8">
             <i className="bi bi-search"></i>
            <Form.Control
              type="text"
              placeholder='serach'
              className=" mr-sm-2 p"
            />
          </Col>
        </Row>
      </Form>
      <Row className='d-flex justify-content-center mt-3'>
        <Col xs="8">

    <Card>
      <Card.Header>Senior Software Developer</Card.Header>
      <Card.Body>

        <Card.Text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae ipsam eligendi. Numquam, dicta ut. Quaerat pariatur perspiciatis dolore asperiores minus possimus perferendis nobis natus, voluptatibus laborum non rerum quisquam!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col xs="8">

    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nisi, fugiat doloribus corporis atque iusto expedita voluptate obcaecati! Quidem assumenda laborum quam alias, incidunt sapiente omnis dolores quia quae possimus.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
        </Container>
        </>
    )
}
export default appliedjob;