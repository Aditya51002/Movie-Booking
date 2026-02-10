import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Success from "./Success";

const HomeWorkMain = () => {
  const [page, setPage] = useState("register");
  const [user, setUser] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {page === "register" && <Register setPage={setPage} />}
      {page === "login" && <Login setPage={setPage} setUser={setUser} />}
      {page === "success" && <Success user={user} />}
    </div>
  );
};

export default HomeWorkMain;
