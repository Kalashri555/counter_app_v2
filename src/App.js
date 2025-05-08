import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function App() {
  const [inputValue, setInputValue] = useState(""); 
  const [count, setCount] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  const handleIncrease = () => {
    if (inputValue !== "") {
      setCount((prev) => prev + Number(inputValue)); 
    }
  };

  const handleDecrease = () => {
    if (inputValue !== "") {
      setCount((prev) => prev - Number(inputValue)); 
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter the number you want</h2>

      <input
        type="number"
        placeholder="Enter number"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: "20px", fontSize: "20px" }}
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
          style={{ marginRight: "30px", fontSize: "30px" }}
        >
          <span className="material-symbols-outlined">add</span>
        </button>

        {count !== 0 && <CounterDisplay value={count} />} {/* Display count only when value is set */}

        <button
          onClick={handleDecrease}
          style={{ marginLeft: "30px", fontSize: "30px" }}
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
      </div>
    </div>
  );
}

export default App;



