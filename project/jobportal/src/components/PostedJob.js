import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom"

function TextExample() {
  const navigate = useNavigate();
  const gotodevelopers=()=>{
    navigate('/Developers')
  };
  return (
    <>
      <h1 className="container"> Posted Job</h1>
      <div className="sameline container">
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>
              <div className="sameline">
                Senior Developer (4536)
                <div className="sameline">
                  8 <i style={{ fontSize: "20px" }} class="bi bi-eye" onClick={gotodevelopers}></i>
                </div>
              </div>
            </Card.Title>
            <Card.Text>
              Kp developers <br />
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              <br />
              <div className="sameline">
                {" "}
                <i style={{ fontSize: "25px" }} class="bi bi-trash "></i>
                <div className="sameline">
                  <i
                    style={{ fontSize: "25px" }}
                    class="bi bi-pencil-square"
                  ></i>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <div className="sameline">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>
                <div className="sameline">
                  Senior Developer (4566)
                  <div className="sameline">
                    17 <i style={{ fontSize: "20px" }} class="bi bi-eye"></i>
                  </div>
                </div>
              </Card.Title>
              <Card.Text>
                Kp developers <br />
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <br />
                <div className="sameline">
                  {" "}
                  <i style={{ fontSize: "25px" }} class="bi bi-trash "></i>
                  <div className="sameline">
                    <i
                      style={{ fontSize: "25px" }}
                      class="bi bi-pencil-square"
                    ></i>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="sameline">
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>
                <div className="sameline">
                  Senior Developer (8536)
                  <div className="sameline">
                    5 <i style={{ fontSize: "20px" }} class="bi bi-eye"></i>
                  </div>
                </div>
              </Card.Title>
              <Card.Text>
                Kp developers <br />
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                <br />
                <div className="sameline">
                  {" "}
                  <i style={{ fontSize: "25px" }} class="bi bi-trash "></i>
                  <div className="sameline">
                    <i
                      style={{ fontSize: "25px" }}
                      class="bi bi-pencil-square"
                    ></i>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default TextExample;
