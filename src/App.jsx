import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TourGrid from "./components/TourGrid";

function App() {
  return (
    <>
      <Header />
     <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
  <Sidebar />
  <TourGrid />
     </div>

    </>
  );
}

export default App;
  