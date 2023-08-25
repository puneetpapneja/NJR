<<<<<<< HEAD
import Card from 'react-bootstrap/Card';

export default function Footer() {

  const formstyle = {
    backgroundColor: "black",
    color: "white",
    position: "fixed",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "100vw"
  };
  return (
    <Card className="text-center" style={formstyle} >
      <Card.Body>
        <Card.Text>
          TM @ 2023 - Techno India NJR Institute of Technology - All Rights Reserved 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
=======
import React from 'react';
import { Container ,Row} from "react-bootstrap";

export default function Footercomponent(){
  return (
    <footer className="bg-dark text-light text-center py-3 mt-auto">
        <Container fluid>
          <p className="m-0">
            TM &copy; 2023 - Techno India NJR Institute Of Technology. All Rights Reserved.
          </p>
        </Container>
      </footer>
  )
}

>>>>>>> d8595ad42d20a4349d702758e3b0ae85f4b55dab
