import { Container, Row, Col } from "react-bootstrap";
import chef1 from "../Assets/chef1.jpg";
import chef2 from "../Assets/chef2.jpg";

function About() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <section className="about-content">
            <h1>Little Lemon</h1>
            <h3>Quebec</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.adipiscing elit, sed do eiusmod
              tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut.adipiscing
              elit, sed do eiusmod tempor incididunt ut.
            </p>
          </section>
        </Col>
        <Col xs={12} md={6}>
          <section className="double-img">
            <img className="chef1" src={chef1} alt="Chef1" />
            <img className="chef2" src={chef2} alt="Chef2" />
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
