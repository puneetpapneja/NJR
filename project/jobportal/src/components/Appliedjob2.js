import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from "react-bootstrap";
export default function Appliedajob2(){
return(
   <Container>
    <Row>
                    <Col lg="1"></Col>
                    <Col lg="10">
                        <h1 style={{textAlign:"center"}}>Applied Jobs</h1>
                    </Col>
                </Row>
                <Card style={{background:"yellow"}}>
      <Card.Body>
        <Card.Title className="d-flex" style={{justifyContent:"space-between"}}> Developer<Card.Title>4 days ago</Card.Title></Card.Title>
        <Card.Text>
            <Card.Text>nehal@gmail.com</Card.Text>
         incidunt officia modi fugiat obcaecati eius quo aliquam, quasi error ipsam maiores nostrum! Consequatur, perferendis! Doloremque id neque similique a! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eum doloremque harum maxime repellendus aperiam laborum iure placeat blanditiis rem, excepturi dolor minus non earum ullam hic quod molestias fugiat cupiditate itaque ad dignissimos! Perspiciatis illum adipisci aspernatur voluptatum sit!
        </Card.Text>
      </Card.Body>
    </Card>
         <Card style={{background:"green"}}>
            
      <Card.Body>
        <Card.Title className="d-flex" style={{justifyContent:"space-between"}}> Developer<Card.Title>4 days ago</Card.Title></Card.Title>
        <Card.Title></Card.Title>
        <Card.Text>
            <Card.Text>nehal@gmail.com</Card.Text>
         incidunt officia modi fugiat obcaecati eius quo aliquam, quasi error ipsam maiores nostrum! Consequatur, perferendis! Doloremque id neque similique a! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eum doloremque harum maxime repellendus aperiam laborum iure placeat blanditiis rem, excepturi dolor minus non earum ullam hic quod molestias fugiat cupiditate itaque ad dignissimos! Perspiciatis illum adipisci aspernatur voluptatum sit!
        </Card.Text>
      </Card.Body>
    </Card>
         <Card>
           
      <Card.Body>
         <Card.Title className="d-flex" style={{justifyContent:"space-between"}}> Developer<Card.Title>4 days ago</Card.Title></Card.Title>
        <Card.Text>
            <Card.Text>nehal@gmail.com</Card.Text>
         incidunt officia modi fugiat obcaecati eius quo aliquam, quasi error ipsam maiores nostrum! Consequatur, perferendis! Doloremque id neque similique a! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta eum doloremque harum maxime repellendus aperiam laborum iure placeat blanditiis rem, excepturi dolor minus non earum ullam hic quod molestias fugiat cupiditate itaque ad dignissimos! Perspiciatis illum adipisci aspernatur voluptatum sit!
        </Card.Text>
      </Card.Body>
    </Card>
   </Container>
)
}