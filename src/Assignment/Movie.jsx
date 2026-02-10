import { useEffect, useState } from "react";
import './Screens.css';

const Movie = ({ setPage, setSelectedMovie }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://imdb.iamidiotareyoutoo.com/search?q=spiderman")
      .then(res => res.json())
      .then(data => setMovies(data.description));
  }, []);

  return (
    <div className="movie-container">
      {movies.map((m, i) => (
        <div
          key={i}className="movie-card" onClick={() => {setSelectedMovie(m); setPage("cinema");}}
        >
          <img  src={m["#IMG_POSTER"]} 
            alt={m["#TITLE"]} 
            className="movie-poster" 
          />
          <div className="movie-info">
            <h4 className="movie-title">{m["#TITLE"]}</h4>
            <p className="movie-rank">
              <span className="movie-rank-star">⭐</span> 
              Rank: {m["#RANK"]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
