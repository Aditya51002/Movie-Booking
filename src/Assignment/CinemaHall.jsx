import './Screens.css';

const halls = [
  { name: "PVR Cinemas", city: "Jalandhar" },
  { name: "INOX", city: "Phagwara" },
  { name: "Cinepolis", city: "Amritshard" }
];

const CinemaHall = ({ movie, setPage, setSelectedCinema }) => {
  return (
    <div className="cinema-container">
      <h2 className="cinema-title">{movie["#TITLE"]}</h2>

      <div className="cinema-grid">
        {halls.map((h, i) => (
          <div
            key={i}
            className="cinema-card"
            onClick={() => {
              setSelectedCinema(h);
              setPage("showtime");
            }}
          >
            <div className="cinema-card-content">
              <span className="cinema-icon">🎬</span>
              <h3 className="cinema-name">{h.name}</h3>
              <p className="cinema-city">📍 {h.city}</p>
              <span className="cinema-badge">Book Now</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaHall;
