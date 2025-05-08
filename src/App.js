import React, { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [actionValue, setActionValue] = useState("");
  const [trigger, setTrigger] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setActionValue("");
    setTrigger(0); 
  };

  const sendAction = (type) => {
    setActionValue(type);
    setTrigger((prev) => prev + 1); 
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

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => sendAction("increase")}
          style={{ marginRight: "20px", fontSize: "20px" }}
        >
          ⬆️ Increase
        </button>
        <button
          onClick={() => sendAction("decrease")}
          style={{ fontSize: "20px" }}
        >
          ⬇️ Decrease
        </button>
      </div>

      <CounterDisplay
        inputValue={inputValue}
        actionValue={actionValue}
        trigger={trigger}
      />
    </div>
  );
}

export default App;
