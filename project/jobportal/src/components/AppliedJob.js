import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Form from "react-bootstrap/Form";

function AppliedJob() {
  return (
    <Container>
        <header style={{marginTop: "100px",marginLeft: "320px"}}>
            <h1><b>Jobs</b></h1>
        </header>
        <Form className="d-flex" style={{marginTop: "30px",width: "50%",marginLeft: "320px"}}>
            <Form.Control
            style={{border: "solid 1px"}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
    <Container style={{marginTop: "30px" , width: "50%"}}>
    <Card>
      <Card.Header style={{color: "Gray"}}>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Card.Text>
        <Button variant="dark">Apply</Button>
      </Card.Body>
    </Card>
    </Container>
    <Container style={{marginTop: "50px" , width: "50%"}}>
    <Card>
      <Card.Header style={{color: "Gray"}}>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Card.Text>
        <Button variant="dark">Apply</Button>
      </Card.Body>
    </Card>
    </Container>
    </Container>
    
  );
}

export default AppliedJob;