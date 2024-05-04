import { Container, Row } from "react-bootstrap";
import footerlogo from "../Assets/footer-logo.png";
import "./Footer";

function Footer() {
  return (
    <Container fluid className="bg-color mt-3">
      <Container>
        <Row>
          <section className="Footer">
            <div>
              <img src={footerlogo} alt="Footer-Logo" />
            </div>
            <ul>
              <li>
                <h4>Doormat Navigation</h4>
                <hr />
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a
                  href={require("../Assets/menu.webp")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Menu
                </a>
              </li>
              <li>
                <a href="/reservation">Reservations</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
            <ul>
              <li>
                <h4>Contact</h4>
                <hr />
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
            <ul>
              <li>
                <h4>Social Media Links</h4>
                <hr />
              </li>
              <li>
                <a href="https://instagram.com">
                  <i class="fa-brands fa-square-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com">
                  <i class="fa-brands fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://telegram.org">
                  <i class="fa-brands fa-telegram"></i> Telegram
                </a>
              </li>
            </ul>
          </section>
        </Row>
      </Container>
      <div className="copy-right">
        <h4>&copy; 2024 Coursera Meta Front-End Developer by Masoud Maleki </h4>
      </div>
    </Container>
  );
}

export default Footer;
