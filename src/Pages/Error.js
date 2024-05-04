import { Container, Row, Col } from "react-bootstrap";

const Error = () => {
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12}>
            <h1>404</h1>
          </Col>
          <Col xs={12}>
            <p>We can't find what you are looking for</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error;
