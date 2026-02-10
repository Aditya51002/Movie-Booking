import { useEffect, useState } from "react";

const Movie = ({ setPage, setSelectedMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://imdb.iamidiotareyoutoo.com/search?q=spiderman")
      .then(res => res.json())
      .then(data => setMovies(data.description));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "25px", justifyContent: "center" }}>
      {movies.map((m, i) => (
        <div
          key={i}
          style={{
            width: "220px",
            background: "#fff",
            borderRadius: "14px",
            padding: "12px",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
          }}
          onClick={() => {
            setSelectedMovie(m);
            setPage("cinema");
          }}
        >
          <img src={m["#IMG_POSTER"]} alt="" style={{ width: "100%", height: "300px", borderRadius: "10px" }} />
          <h4>{m["#TITLE"]}</h4>
          <p>⭐ Rank: {m["#RANK"]}</p>
        </div>
      ))}
    </div>
  );
};

export default Movie;
