import tours from "../Data/tours";
import "./HorizontalScroll.css";

export default function HorizontalScroll() {
  const twoTours = tours.slice(1, 3); 
  const two1=tours.slice(3,5);
  

  return (
    <div className="slide-viewport">
      <div className="slide-track">
        {[...twoTours, ...two1].map((tour, i) => (
          <div key={i} className="slide-card">
            <img src={tour.images[0]} alt="" />
            <h4>{tour.title}</h4>
            <p>{tour.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
