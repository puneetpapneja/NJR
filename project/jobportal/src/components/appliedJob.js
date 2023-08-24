import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormControl, InputGroup } from 'react-bootstrap';
const appliedjob=()=>{
    return(
        <>
        <Container fluid>
          <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <h1 style={{textAlign:"center"}}>Jobs</h1>
                    </Col>
                </Row>
          <Row>
            <Col style={{position:"absolute",top:"120px",left:"10px",marginLeft:"350px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
</Col>
<Col lg={6} style={{marginLeft:"350px"}}>
        <FormControl
          type="text"
          
        />
        </Col>
    </Row>
    <Container>
 <Card style={{marginTop:"20px"}}>
      
      <Card.Header as="h5">Senior deveoper</Card.Header>
      
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque sunt optio vel blanditiis dolore incidunt recusandae nesciunt accusantium ea voluptas eum temporibus unde, architecto quod non perspiciatis ratione eaque.
        </Card.Text>
        <Row>
          <Col>
        <Button variant="dark">Apply</Button>
        </Col>
        <Col>
        <Card.Text as="h5" style={{marginLeft:"400px"}}>Max Salary</Card.Text>
        </Col>
        <Row style={{marginLeft:"990px",marginTop:"-15px"}}>
          10k-20k
        </Row>
        </Row>
      </Card.Body>
    </Card>
    <Card style={{marginTop:"20px"}}>
      
      <Card.Header as="h5">Senior deveoper</Card.Header>
      
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam itaque sunt optio vel blanditiis dolore incidunt recusandae nesciunt accusantium ea voluptas eum temporibus unde, architecto quod non perspiciatis ratione eaque.
        </Card.Text>
        <Row>
          <Col>
        <Button variant="dark">Apply</Button>
        </Col>
        <Col>
        <Card.Text as="h5" style={{marginLeft:"400px"}}>Max Salary</Card.Text>
        </Col>
        <Row style={{marginLeft:"990px",marginTop:"-15px"}}>
          10k-20k
        </Row>
        </Row>
      </Card.Body>
    </Card>
    </Container>
        </Container>
        </>
    )
}
export default appliedjob;