import { useState } from "react";
import './Screens.css';

const times = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"];

const ShowTime = ({ user, movie, cinema, setPage }) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const book = (time) => {
    const booking = {
      user: user.email,
      movie: movie["#TITLE"],
      cinema: cinema.name,
      city: cinema.city,
      date,
      time
    };

    const all = JSON.parse(localStorage.getItem("bookings")) || [];
    all.push(booking);
    localStorage.setItem("bookings", JSON.stringify(all));
    setPage("success");
  };

  return (
    <div className="showtime-container">
      <div className="showtime-header">
        <h2 className="showtime-movie-title">{movie["#TITLE"]}</h2>
        <p className="showtime-cinema-info">
          🎬 {cinema.name} • 📍 {cinema.city}
        </p>
      </div>

      <div className="showtime-date-section">
        <label className="showtime-date-label">Select Date:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          className="showtime-date-input"
        />
      </div>

      <div className="showtime-times-section">
        <h3 className="showtime-times-title">Choose Show Time:</h3>
        <div className="showtime-times-grid">
          {times.map(t => (
            <button 
              key={t} 
              onClick={() => book(t)}
              className="showtime-time-btn"
            >
              🕐 {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowTime;
