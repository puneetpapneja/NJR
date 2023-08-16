import Card from 'react-bootstrap/Card';

export default function Footer() {
  return (
    <Card className="text-center text-light fixed-bottom mb-5 " style={{ backgroundColor: 'black'}} >
      <Card.Body>
        <Card.Text>
          TM @ 2023 - Techno India NJR Institute of Technology - All Rights Reserved 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
