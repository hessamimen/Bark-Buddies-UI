import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Map from "./components/Map";
import Searchbar from "./components/Searchbar";
import Signin from "./components/Signin";
import Location from "./components/Location";

function App() {
  return (
    <div className="App bg-[#344E41] h-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/map" element={<Map />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      {/* <Searchbar /> */}
      {/* <Map /> */}
      {/* <Signin /> */}
    </div>
  );
}

export default App;
