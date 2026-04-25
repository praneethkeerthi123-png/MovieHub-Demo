import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Seats from "./pages/Seats";
import Success from "./pages/Success";
import History from "./pages/History";

export default function App() {
  return (
    <>
      <div className="disclaimer-banner">
        Student demo project only. No real bookings, payments, login, or personal data collection.
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/seats/:id" element={<Seats />} />
        <Route path="/success" element={<Success />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}