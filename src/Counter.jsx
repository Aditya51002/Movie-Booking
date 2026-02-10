import React from "react";

function Counter({ showCards, toggleCards }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Count: {showCards ? 1 : 0}</h2>
      <button onClick={toggleCards}>
        {showCards ? "Hide Cards" : "Show Cards"}
      </button>
    </div>
  );
}

export default Counter;