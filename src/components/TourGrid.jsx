import Banner from "./Banner";
import HorizontalScroll from "./HorizontalScroll";
import BHorizon from "./BHorizon";

export default function TourGrid() {
  return (
    <div style={{ flex: 1 }}>
      <HorizontalScroll />

      <div style={{ margin: "20px 0" }}>
        <Banner />
      </div>

      <BHorizon/>
    </div>
  );
}

