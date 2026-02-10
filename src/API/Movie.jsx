import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://imdb.iamidiotareyoutoo.com/search?q=spiderman")
      .then((res) => res.json())
      .then((data) => setMovies(data.description))
      .catch((err) => console.log(err));
  }, []);

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    padding: "30px",
    justifyContent: "center",
    background: "linear-gradient(135deg, #92096d, #162175)",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  };

  const cardStyle = {
    width: "200px",
    background: "#7a8ae5",
    padding: "12px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  };

  const cardHover = {
    transform: "translateY(-6px)",
    boxShadow: "0 12px 30px rgba(0,0,0,0.2)"
  };

  const imgStyle = {
    width: "100%",
    height: "280px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px"
  };

  const titleStyle = {
    fontSize: "14px",
    fontWeight: "600",
    margin: "6px 0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };

  const subTextStyle = {
    fontSize: "12px",
    color: "#666",
    margin: "4px 0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  };

  const ratingStyle = {
    fontSize: "13px",
    color: "#222",
    fontWeight: "bold",
    marginTop: "6px"
  };

  return (
    <div style={containerStyle}>
      {movies.map((movie, index) => (
        <div
          key={index}
          style={cardStyle}
          onMouseEnter={(e) =>
            Object.assign(e.currentTarget.style, cardHover)
          }
          onMouseLeave={(e) =>
            Object.assign(e.currentTarget.style, cardStyle)
          }
        >
          <img
            src={movie["#IMG_POSTER"]}
            alt={movie["#TITLE"]}
            style={imgStyle}
          />

          <h3 style={titleStyle}>{movie["#TITLE"]}</h3>
          <p style={subTextStyle}>{movie["#ACTORS"]}</p>
          <p style={subTextStyle}>{movie["#AKA"]}</p>

          <p style={ratingStyle}>⭐ Rank: {movie["#RANK"]}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
