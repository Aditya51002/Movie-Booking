import { useState } from "react";

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
    <div style={{ background: "#fff", padding: "25px", borderRadius: "16px" }}>
      <h2>{movie["#TITLE"]}</h2>
      <p>{cinema.name} • {cinema.city}</p>

      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <div>
        {times.map(t => (
          <button key={t} onClick={() => book(t)} style={{ margin: "10px" }}>
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShowTime;
