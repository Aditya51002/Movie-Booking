import { useReducer } from "react";
import { CounterContext } from "./CounterContext";
import { CounterReducer } from "./CounterReducer";
import Display from "./Display";
import Control from "./Control";

const App = () => {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <h2>Counter App</h2>
      <Control />
      <Display />
    </CounterContext.Provider>
  );
};

export default App;
