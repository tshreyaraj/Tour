import Banner from "./Banner";
import HorizontalScroll from "./HorizontalScroll";
import BHorizon from "./BHorizon";

export default function TourGrid() {
  return (
    <div style={{ flex: 1 }}>
      <HorizontalScroll />

      <div>
        <Banner />
      </div>

      <BHorizon/>
    </div>
  );
}

