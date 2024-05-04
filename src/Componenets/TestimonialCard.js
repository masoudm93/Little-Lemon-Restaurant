import "./TestimonialCard.css";
import star from "../Assets/star.png"
const TestimonialCard = ({ data }) => {
  return (
    <div className="col-25 col-50 col light">
      <div className="center my-3">
        <img className="test-img" src={data.picture.large} alt="" />
      </div>
      <h5 className="center my-2">{data.name.first}</h5>
      <p>
        &quot;Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repudiandae, tenetur&quot;
      </p>
      <div className="rating">
        <img src={star}/>
      </div>
    </div>
  );
};

export default TestimonialCard;
