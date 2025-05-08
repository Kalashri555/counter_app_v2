import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(null); 
  const [initialSet, setInitialSet] = useState(false); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInitialSet(false); // reset if new input
    setCount(null);
  };

  const applyInitialValueIfNeeded = () => {
    if (!initialSet && inputValue !== "") {
      setCount(Number(inputValue));
      setInitialSet(true);
      return Number(inputValue);
    }
    return count;
  };

  const handleIncrease = () => {
    const base = applyInitialValueIfNeeded();
    if (initialSet) setCount(base + 1);
  };

  const handleDecrease = () => {
    const base = applyInitialValueIfNeeded();
    if (initialSet) setCount(base - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter the number</h2>

      <input
        type="number"
        placeholder="Enter starting value"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60vh",
        }}
      >
        <button
          onClick={handleIncrease}
          style={{ marginRight: "300px", fontSize: "30px" }}
        >
          <span className="material-symbols-outlined">⬆️Increase</span>
        </button>

        {count !== null && <CounterDisplay value={count} />}

        <button
          onClick={handleDecrease}
          style={{ marginLeft: "300px", fontSize: "30px" }}
        >
          <span className="material-symbols-outlined">⬇️Decrease</span>
        </button>
      </div>
    </div>
  );
}

export default App;
