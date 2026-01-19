import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TourGrid from "./components/TourGrid";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <Sidebar />
        <TourGrid />
      </div>
    </>
  );
}

export default App;
