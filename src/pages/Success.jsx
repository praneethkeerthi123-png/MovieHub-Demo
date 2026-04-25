import { useLocation, Link } from "react-router-dom";

export default function Success() {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return (
      <div className="success-page">
        <h1>No booking found</h1>
        <Link to="/" className="primary-btn link-btn">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="success-card">
        <h1>✅ Simulated Booking Confirmed</h1>
        <img
          src={booking.movieImage}
          alt={booking.movieTitle}
          className="success-image"
        />
        <h2>{booking.movieTitle}</h2>
        <p>
          <strong>Show Time:</strong> {booking.time}
        </p>
        <p>
          <strong>Seats:</strong> {booking.seats.join(", ")}
        </p>
        <p>
          <strong>Simulated Amount:</strong> ₹{booking.total}
        </p>
        <p>
          <strong>Booked At:</strong> {booking.bookedAt}
        </p>

        <div className="details-actions">
          <Link to="/" className="primary-btn link-btn">
            Home
          </Link>
          <Link to="/history" className="secondary-btn link-btn">
            View History
          </Link>
        </div>
      </div>
    </div>
  );
}