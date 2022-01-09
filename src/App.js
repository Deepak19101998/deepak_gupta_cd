import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Apartment from "./components/Apartment";
import Building from "./components/Building";
import Details from "./components/Details";
import Home from "./components/Home";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home_ground/building" element={<Building />} />
        <Route exact path="/home_ground/apartment" element={<Apartment />} />
        <Route exact path="/home_ground/location" element={<Location />} />
        <Route exact path=":id/detail" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
