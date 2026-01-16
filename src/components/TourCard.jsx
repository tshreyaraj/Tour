import { useEffect, useState } from "react";

export default function TourCard({ tour }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev === 0 ? -100 : 0));
    }, 3000); // scroll every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.card}>
      {/* IMAGE SLIDER */}
      <div style={styles.sliderWrapper}>
        <div
          style={{
            ...styles.slider,
            transform: `translateX(${offset}%)`,
          }}
        >
          <img src={tour.images[0]} alt="" style={styles.img} />
          <img src={tour.images[1]} alt="" style={styles.img} />
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <h4>{tour.title}</h4>
        <p>{tour.price}</p>
        <button style={styles.btn}>More Details</button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "320px",
    background: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
  },

  sliderWrapper: {
    width: "100%",
    height: "180px",
    overflow: "hidden",
  },

  slider: {
    display: "flex",
    width: "200%", // ONLY 2 images
    transition: "transform 0.8s ease-in-out",
  },

  img: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },

  content: {
    padding: "10px",
  },

  btn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
