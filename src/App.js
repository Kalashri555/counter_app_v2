import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter the number</h2>
      <input
        type="number"
        placeholder="Enter value"
        value={inputValue}
        onChange={handleInputChange}
        style={{ padding: "10px", fontSize: "16px" }}
      />

      {/* Pass the inputValue as prop to child */}
      <CounterDisplay inputValue={inputValue} />
    </div>
  );
}

export default App;

