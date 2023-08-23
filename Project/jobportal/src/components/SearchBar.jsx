import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function SearchBar({ nameClass }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      navigate("/search-result");
    }
  };
  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Form>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className={nameClass}
              onKeyDown={handleClick}
            />
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

export default SearchBar;