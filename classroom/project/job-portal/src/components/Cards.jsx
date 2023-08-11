import Card from "react-bootstrap/Card";
import data from "./cardData.json";

const cardStyle = {
  textAlign: "center",
  display: "inline-block",
  width: "18rem",
  margin: "2vw 3vw 3vw 3vw",
  backgroundColor: "rgb(174, 226, 234)",
  padding: "50px",
};
function Cards() {
  return (
    <>
      <Card.Title style={{ margin: "2.5vh 0 0 3vw" }}>DASHBOARD</Card.Title>
      {data.map((card) => (
        <Card key={card.id} style={cardStyle} inline>
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Subtitle>{card.subtitle}</Card.Subtitle>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default Cards;
