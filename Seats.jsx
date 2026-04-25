import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { movies } from "../data";

export default function Seats() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));
  const selectedTime = location.state?.selectedTime || "Not Selected";

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats] = useState([3, 7, 12, 18, 25, 31]);

  const seats = Array.from({ length: 40 }, (_, i) => i + 1);

  const toggleSeat = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return;

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const confirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    const bookingData = {
      movieTitle: movie.title,
      movieImage: movie.image,
      time: selectedTime,
      seats: selectedSeats,
      total: selectedSeats.length * 200,
      bookedAt: new Date().toLocaleString(),
    };

    const oldBookings = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, bookingData])
    );

    navigate("/success", { state: bookingData });
  };

  return (
    <div className="seats-page">
      <h1>Select Seats</h1>
      <p className="seat-subtext">
        <strong>Movie:</strong> {movie?.title} | <strong>Time:</strong> {selectedTime}
      </p>

      <div className="screen">SCREEN THIS WAY</div>

      <div className="seat-grid">
        {seats.map((seat) => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          return (
            <button
              key={seat}
              className={`seat ${isBooked ? "booked" : ""} ${
                isSelected ? "selected-seat" : ""
              }`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </button>
          );
        })}
      </div>

      <div className="seat-legend">
        <span>
          <span className="legend-box available"></span> Available
        </span>
        <span>
          <span className="legend-box selected-box"></span> Selected
        </span>
        <span>
          <span className="legend-box booked-box"></span> Booked
        </span>
      </div>

      <div className="booking-summary">
        <p>
          <strong>Selected Seats:</strong>{" "}
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </p>
        <p>
          <strong>Total:</strong> ₹{selectedSeats.length * 200}
        </p>
      </div>

      <div className="details-actions">
        <button className="secondary-btn" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="primary-btn" onClick={confirmBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
// Improved seat selection UI and interaction - Praneeth
// Optimized seat selection logic and UI - Praneeth
