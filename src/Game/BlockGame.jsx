import React, { useState } from "react";

function MainBody() {
  const [started, setStarted] = useState(false);
  const [userNumber, setUserNumber] = useState("");
  const [boxNumbers, setBoxNumbers] = useState([]);
  const [revealed, setRevealed] = useState([false, false, false, false]);
  const [result, setResult] = useState("");

  const startGame = () => {
    const nums = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);
    setBoxNumbers(nums);
    setRevealed([false, false, false, false]);
    setResult("");
    setStarted(true);
  };

  const handleBoxClick = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (boxNumbers[index] === parseInt(userNumber)) {
      setResult("You Win!!");
    } else {
      setResult(" Lose!!.");
      setRevealed([true, true, true, true]); 
    }
  };

  return (
    <main className="flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold mb-6">Guess Game</h2>

      {!started ? (

        <div
          onClick={startGame} className="w-40 h-40 flex items-center justify-center bg-blue-600 text-white rounded-lg cursor-pointer text-xl font-semibold shadow-lg hover:bg-blue-700 transition">
          Start Game
        </div>
      ) : (
        <>
          <div className="mb-4 flex gap-2">
            <input
              type="number"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
              placeholder="Enter number (1-10)"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4 mt-6">
            {boxNumbers.map((num, index) => (
              <div
                key={index}
                onClick={() => handleBoxClick(index)}
                className="w-20 h-20 flex items-center justify-center bg-gray-800 text-white rounded-lg cursor-pointer text-lg font-bold shadow-md hover:bg-gray-700 transition"
              >
                {revealed[index] ? num : "?"}
              </div>
            ))}
          </div>

          {result && (
            <h3 className="mt-6 text-xl font-semibold text-center">
              {result}
            </h3>
          )}
        </>
      )}
    </main>
  );
}

export default MainBody;