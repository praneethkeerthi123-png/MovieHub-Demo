import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { movies } from "../data";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === Number(id));
  const [selectedTime, setSelectedTime] = useState("");

  if (!movie) {
    return <h2 className="not-found">Movie not found</h2>;
  }

  const handleProceed = () => {
    if (!selectedTime) {
      alert("Please select a show time");
      return;
    }

    navigate(`/seats/${movie.id}`, { state: { selectedTime } });
  };

  return (
    <div className="details-page">
      <div className="details-card">
        <img src={movie.image} alt={movie.title} className="details-image" />

        <div className="details-content">
          <h1>{movie.title}</h1>
          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>
          <p>
            <strong>Rating:</strong> {movie.rating}
          </p>
          <p>
            <strong>Language:</strong> {movie.language}
          </p>
          <p>
            <strong>Duration:</strong> {movie.duration}
          </p>
          <p className="description">{movie.description}</p>

          <h3>Select Show Time</h3>
          <div className="timings">
            {movie.timings.map((time) => (
              <button
                key={time}
                className={`time-btn ${selectedTime === time ? "selected" : ""}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>

          <div className="details-actions">
            <button className="secondary-btn" onClick={() => navigate("/")}>
              Back
            </button>
            <button className="primary-btn" onClick={handleProceed}>
              Select Seats
            </button>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}