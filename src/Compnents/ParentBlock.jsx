import React, { useState } from "react";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";

function ParentBlock() {
  const [count, setCount] = useState(0);

  const handleIncrementWithDelay = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  return (
    <div className="p-4 border-4 border-blue-500 grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Enter text here"
        className="col-span-2 p-2 border-2 border-gray-300 rounded"
      />

      <button
        onClick={handleIncrementWithDelay}
        className="p-2 bg-blue-500 text-white rounded col-span-2"
      >
        Increment after 1 sec
      </button>

      <Block1 value={count} />
      <Block2 value={count} />
      <Block3 value={count} />
      <Block4 value={count} />
    </div>
  );
}

export default ParentBlock;