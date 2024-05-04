import { Container } from "react-bootstrap";
import "./Testimonial.css";
import TestimonialsCard from "./TestimonialCard";
import { useState, useEffect } from "react";

const Testimonial = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=4");
      const data = await response.json();
      setUsers(data.results);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="bg-color custom-container p-5 my-5">
      <section className="testimonial">
        <h2>Testimonials from our guests!</h2>
        <div className="row justify-content-center align-items-center pd">
          {users.map((person, index) => {
            return <TestimonialsCard key={index} data={person} />;
          })}
        </div>
      </section>
    </Container>
  );
};

export default Testimonial;
