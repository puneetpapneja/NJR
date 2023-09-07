import { Container } from "react-bootstrap";
//import Accordion from 'react-bootstrap/Accordion';
//import Button from 'react-bootstrap/Button';
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
                <Card style={{background:"LightGray"}}>
      <Card.Body>
        <Card.Title className="d-flex" style={{justifyContent:"space-between"}}>Frontend Developer<Card.Title>4 days ago</Card.Title></Card.Title>
        <Card.Text>
            <Card.Text>Recruiter@gmail.com</Card.Text>
            We are hiring a frontend developer, with a range of qualifications and skills to ensure they are capable of creating a user-friendly and visually appealing web interface. Here are some key qualifications and attributes to look for in a frontend developer:
            Strong HTML,CSS and Javascript skills, Responsive Web Designer ,CSS Preprocessing, Frontend Frameworks and Libraries.                                                                                                 
        </Card.Text>
      </Card.Body>
    </Card>
         <Card style={{background:"LightPink"}}>
            
      <Card.Body>
        <Card.Title className="d-flex" style={{justifyContent:"space-between"}}>Backend Developer<Card.Title>4 days ago</Card.Title></Card.Title>
        <Card.Title></Card.Title>
        <Card.Text>
            <Card.Text>hr@gmail.com</Card.Text>
            We are hiring a backend developer, and looking forward for qualifications and skills that demonstrate their ability to build, maintain, and optimize the server-side components of your web applications. Here are some key qualifications and attributes to consider when hiring a backend developer: 
            Programming Languages, Server Frameworks, Database Management, API Development.
        </Card.Text>
      </Card.Body>
    </Card>
         <Card style={{background:"LightBlue"}}>
           
      <Card.Body>
         <Card.Title className="d-flex" style={{justifyContent:"space-between"}}>UI/UX Designer<Card.Title>4 days ago</Card.Title></Card.Title>
        <Card.Text>
            <Card.Text>designer@gmail.com</Card.Text>
            Hiring a UI/UX designer is crucial for creating visually appealing and user-friendly digital products. When hiring a UI/UX designer, it's essential to assess their design skills, user-centered mindset, and ability to collaborate with multidisciplinary teams. The designer should be able to balance aesthetics with functionality, resulting in designs that not only look great but also provide an exceptional user experience.
        </Card.Text>
      </Card.Body>
    </Card>
   </Container>
)
}

