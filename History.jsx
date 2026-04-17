import { Link } from "react-router-dom";

export default function History() {
  const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

  return (
    <div className="history-page">
      <div className="history-header">
        <h1>Booking History</h1>
        <Link to="/" className="primary-btn link-btn">
          Back Home
        </Link>
      </div>

      {bookings.length === 0 ? (
        <p className="empty-text">No bookings yet.</p>
      ) : (
        <div className="history-grid">
          {bookings.map((booking, index) => (
            <div className="history-card" key={index}>
              <img src={booking.movieImage} alt={booking.movieTitle} />
              <h3>{booking.movieTitle}</h3>
              <p>
                <strong>Time:</strong> {booking.time}
              </p>
              <p>
                <strong>Seats:</strong> {booking.seats.join(", ")}
              </p>
              <p>
                <strong>Total:</strong> ₹{booking.total}
              </p>
              <p>
                <strong>Date:</strong> {booking.bookedAt}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}