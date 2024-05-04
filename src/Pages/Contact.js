import { Container, Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function TextControlsExample() {
  return (
    <Container fluid className="bg-color">
      <Container>
        <Row>
          <Col className="Footer d-flex justify-content-start">
            <ul>
              <li>
                <h4 className="reserve-h2">Contact</h4>
              </li>
              <li>
                <p>
                  <i class="fa-solid fa-location-dot"></i> 111 main street
                </p>
              </li>
              <li>
                <p>
                  <i class="fa-solid fa-phone"></i> (+1)123-456-7890
                </p>
              </li>
              <li>
                <p>
                  <i class="fa-solid fa-envelope"></i> info@littlelemon.com
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5">
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Write for us</Form.Label>
            <Form.Control as="textarea" rows={7} required />
          </Form.Group>
          <Button variant="warning" className="login-button" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </Container>
  );
}

export default TextControlsExample;
