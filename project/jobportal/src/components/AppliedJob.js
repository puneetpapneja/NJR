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
        <Card.Header><div className="fordisplay">Senior Software Developer<div className="fordisplay">Company Name <br/>Kp Developers</div></div></Card.Header>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>
            <div className="fordisplay">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <div className="fordislpay"><b>Max Salary</b> <br/>20-40k Month</div></div>
          </Card.Text>
          <Button variant="dark">Apply</Button>
        </Card.Body>
      </Card>
      <br />
      <Card border="secondary" style={{ width: "81rem" }}>
      <Card.Header><div className="fordisplay">Car Driver<div className="fordisplay">Company Name <br/>Celebal technology</div></div></Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
          <div className="fordisplay">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            <div className="fordislpay"><b>Max Salary</b> <br/>12-20k Month</div></div>
          </Card.Text>
          <Button variant="dark">Apply</Button>
        </Card.Body>
      </Card>
      </div>
     
    </>
  );
};
export default appliedjob;
