import { Row ,Col} from "react-bootstrap";
import { Card } from "react-bootstrap";
export default function postedjob(){
    return(
        <>
        <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <h1 style={{textAlign:"center"}}>Posted Jobs</h1>
                    </Col>
                </Row>
   <Row style={{display:"flex", justifyContent:"space-evenly"}}>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title style={{display:"flex"}}>Senior Developer(4536)<i class="bi bi-eye"></i> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
</svg></Card.Title>
       
        <Card.Subtitle className="mb-2 text-muted">Kp developers</Card.Subtitle>
         <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci nihil atque voluptatum ea. Reiciendis error quaerat cum quia, eos in excepturi nesciunt atque animi harum voluptate esse dignissimos possimus.
        </Card.Text>
        
      </Card.Body>
       <Row>
        <Col> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
</svg></Col>
       <Col style={{marginLeft:"170px",marginBottom:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  </svg></Col>
</Row>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title style={{display:"flex"}}>Senior Developer(4556) <i class="bi bi-eye"></i><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  </svg></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci nihil atque voluptatum ea. Reiciendis error quaerat cum quia, eos in excepturi nesciunt atque animi harum voluptate esse dignissimos possimus.
        </Card.Text>
      </Card.Body>
      <Row>
        <Col> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  </svg></Col>
       <Col style={{marginLeft:"170px",marginBottom:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  </svg></Col>
</Row>

      
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title style={{display:"flex"}}>Senior Developer(2806)<i class="bi bi-eye"></i><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  </svg></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci nihil atque voluptatum ea. Reiciendis error quaerat cum quia, eos in excepturi nesciunt atque animi harum voluptate esse dignissimos possimus.
        </Card.Text>
        
      </Card.Body>
    <Row>
        <Col> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  </svg></Col>
       <Col style={{marginLeft:"170px",marginBottom:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  </svg></Col>
</Row>
    </Card>
    </Row>
    </>
    )
}