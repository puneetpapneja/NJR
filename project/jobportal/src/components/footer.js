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
