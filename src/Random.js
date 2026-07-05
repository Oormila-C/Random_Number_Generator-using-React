import { useState } from "react";
import "./Random.css";

function Random() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Random Number Generator</h1>
        {randomNumber === null ? (
          <p className="message">No number generated yet</p>
        ) : (
          <h2 className="number">{randomNumber}</h2>
        )}

        <button onClick={generateRandomNumber}>
          Generate Random Number
        </button>
      </div>
    </div>
  );
}

export default Random;