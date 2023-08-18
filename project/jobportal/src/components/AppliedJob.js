import Card from "react-bootstrap/Card";
import { Form, FormControl, Button } from 'react-bootstrap';

const appliedjob = () => {
  return (
    <>
    
    <div className="container">
    <h1>Jobs</h1>
    <Form inline className="" style={{width:"70 rem"}}>
      <FormControl type="text" placeholder="Search"  />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
    
    <br />
      <Card border="secondary" style={{ width: "81rem" }}>
        <Card.Header>Senior Software Developer</Card.Header>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="secondary" style={{ width: "81rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
     
    </>
  );
};
export default appliedjob;
