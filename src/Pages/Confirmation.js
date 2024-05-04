import { Container } from "react-bootstrap";

const Confirmation = ({ conf }) => {
  const render = conf;
  return (
    <>
      <Container fluid className="bg-color">
        <Container>
          <section className="my-4 p-4">
            <h2 className="reserve-h2">Reservation Confirmed</h2>
            <div
              className="container row pd my-3"
              style={{
                width: "60%",
                margin: "0 auto",
                background: "#F4CE14",
                padding: "15px",
                borderRadius: "15px",
              }}
            >
              <h6>{`${render.line1}`}</h6>
              <h6>{`${render.line2}`}</h6>
              <h6>{`${render.line3}`}</h6>
            </div>
          </section>
        </Container>
      </Container>
    </>
  );
};

Confirmation.propTypes = {};

export default Confirmation;
