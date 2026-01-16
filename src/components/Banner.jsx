import bannerImg from "../assets/banner1.png";

export default function Banner() {
  return (
    <img
      src={bannerImg}
      alt="Banner"
      style={{
        width: "100%",
        height: "240px",
        objectFit: "cover",
        borderRadius: "12px",
        margin: "10px 0"
      }}
    />
  );
}
