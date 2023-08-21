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

