import Box from "./box";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Dashboard() {
  return (
    <Container className="dashbody_css">
      <Row>
        <h1>Dashboard</h1>
        <Col sm={12} md={8} xl={4}>
          <div className="d-flex">
            <Box title="7" content="Applied" backgroundColor="red" />
          </div>
        </Col>
        <Col sm={12} md={8} xl={4}>
          <div className="d-flex">
            <Box title="40" content="Total Post" backgroundColor="green" />
          </div>
        </Col>
        <Col sm={12} md={8} xl={4}>
          <div className="d-flex">
            <Box title="2" content="Today Post" backgroundColor="purple" />
          </div>
        </Col>
      </Row>
    </Container>
    // <div className="dash_box">
    //   <h1> Dashboard</h1>

    //   <Box title="7" content="Applied" backgroundColor="red" />
    //   <Box title="40" content="Total Post " backgroundColor="green" />
    //   <Box title="2" content="Today Post " backgroundColor="purple" />
    // </div>
  );
}
export default Dashboard;
