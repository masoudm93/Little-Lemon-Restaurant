
import chef1 from "../Assets/chef1.jpg";
import chef2 from "../Assets/chef2.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div>
      <Container fluid className="py-3">
        <Container>
          <Row className="my-4 py-5">
            <Col xs={6} className="ms-auto">
              <img className="about-image img-fluid" src={chef1} alt="Chef1" />
            </Col>
            <Col xs={6} className="custom-about">
              <h1>Little Lemon</h1>
              <h3>Quebec</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
                ipsum
              </p>
            </Col>
          </Row>
          <Row className="my-4 pb-4">
            <Col xs={6} className="custom-about">
              <h1>Little Lemon</h1>
              <h3>Quebec</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </Col>
            <Col xs={6} className="me-auto">
              <img className="about-image img-fluid" src={chef2} alt="Chef2" />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Aboutpage;
