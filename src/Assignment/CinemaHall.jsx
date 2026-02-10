const halls = [
  { name: "PVR Cinemas", city: "Delhi" },
  { name: "INOX", city: "Mumbai" },
  { name: "Cinepolis", city: "Bangalore" }
];

const CinemaHall = ({ movie, setPage, setSelectedCinema }) => {
  return (
    <div>
      <h2 style={{ color: "#fff" }}>{movie["#TITLE"]}</h2>

      {halls.map((h, i) => (
        <div
          key={i}
          style={{
            background: "#fff",
            padding: "15px",
            margin: "15px",
            borderRadius: "12px",
            cursor: "pointer"
          }}
          onClick={() => {
            setSelectedCinema(h);
            setPage("showtime");
          }}
        >
          <h3>{h.name}</h3>
          <p>{h.city}</p>
        </div>
      ))}
    </div>
  );
};

export default CinemaHall;
