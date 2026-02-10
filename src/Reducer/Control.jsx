import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Control = () => {
  const { dispatch } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>Decrement</button>
    </div>
  );
};

export default Control;
