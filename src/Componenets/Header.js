import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import image1 from "../Assets/restauranfood.jpg";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Container fluid className="custom-header">
      <Container>
        <Row className="py-3">
          <Col xs={12} md={6} className="header-content">
            <h1 className="h1-header">Little Lemon</h1>
            <h3>Quebec</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.adipiscing elit, sed do eiusmod
              tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut.adipiscing
              elit, sed do eiusmod tempor incididunt ut.
            </p>
            <Nav.Link href="/reservation">
              <Button
                variant="warning"
                className="custom-button"
              >
                Reserve a table
              </Button>
            </Nav.Link>
          </Col>
          <Col xs={12} md={6} className="d-none d-md-block">
            <img src={image1} className="img-responsive" alt="headerimage" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Header;
