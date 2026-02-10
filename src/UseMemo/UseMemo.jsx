import { useState, useMemo } from "react";

const UseMemo = () => {
  const [num, setNum] = useState(0);

  const multfun = (num) => {
    let mul = 1;
    mul = mul * num;
    return mul;
  };

  const calfun = useMemo(() => {
    return multfun(num);
  }, [num]);

  return (
    <div
      style={{
        margin: "10px",
        width: "300px",
        height: "300px",
        border: "2px solid black",
      }}
    >
      <h2>UseMemo</h2>
      <h3>Result: {calfun}</h3>
      <button onClick={() => setNum(num + 1)}>Click</button>
    </div>
  );
};

export default UseMemo;
