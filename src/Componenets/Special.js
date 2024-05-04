import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import salad from "../Assets/greek-salad.webp";
import bruchetta from "../Assets/bruschetta.jpeg";
import dessert from "../Assets/lemon-dessert.webp";
import Nav from "react-bootstrap/Nav";


function Special() {
  return (
    <Container>
      <Container className="custom-special">
        <Row>
          <Col
            xs={12}
            className="d-flex justify-content-evenly align-items-center my-5"
          >
            <h1>This Week Specials!</h1>
            <Nav.Link
              href={require("../Assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="warning" className="custom-button">
                Online Menu
              </Button>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
      <Row xs={12} md={3}>
        <Col className="d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={salad} className="card-img" />
            <Card.Body>
              <Card.Title>
                Greek Salad
                <span className="ms-5">$12.99</span>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning" className="custom-button">
                Order Online
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={bruchetta} className="card-img" />
            <Card.Body>
              <Card.Title>
                Brucheta
                <span className="ms-5">$10.99</span>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning" className="custom-button">
                Order Online
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center mb-3">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={dessert} className="card-img" />
            <Card.Body>
              <Card.Title>
                Lemon dessert
                <span className="ms-5">$9.99</span>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="warning" className="custom-button">
                Order Online
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Special;
