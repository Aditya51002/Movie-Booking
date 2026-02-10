import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Display = () => {
  const { state } = useContext(CounterContext);

  return (
    <div>
      <h2>Count: {state.count}</h2>
    </div>
  );
};

export default Display;
