import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Movie from "./Movie";
import CinemaHall from "./CinemaHall";
import ShowTime from "./ShowTime";
import Success from "./Success";
import Header from "./Header";
import Footer from "./Footer";

const AssignmentMain = () => {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedCinema, setSelectedCinema] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg,#0f2027,#203a43,#2c5364)",
        fontFamily: "Inter, Arial, sans-serif"
      }}
    >
      <Header />

      <div
        style={{
          flex: 1,
          padding: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        {page === "register" && <Register setPage={setPage} />}
        {page === "login" && <Login setPage={setPage} setUser={setUser} />}
        {page === "movie" && (
          <Movie setPage={setPage} setSelectedMovie={setSelectedMovie} />
        )}
        {page === "cinema" && (
          <CinemaHall
            movie={selectedMovie}
            setPage={setPage}
            setSelectedCinema={setSelectedCinema}
          />
        )}
        {page === "showtime" && (
          <ShowTime
            user={user}
            movie={selectedMovie}
            cinema={selectedCinema}
            setPage={setPage}
          />
        )}
        {page === "success" && <Success />}
      </div>

      <Footer />
    </div>
  );
};

export default AssignmentMain;
