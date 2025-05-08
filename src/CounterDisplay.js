import React, { useState, useEffect } from "react";

function CounterDisplay({ inputValue }) {
  const [count, setCount] = useState(null);
  const [initialSet, setInitialSet] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  useEffect(() => {
   
    setInitialSet(false);
    setCount(null);
    setActionMessage("");
  }, [inputValue]);

  const applyInitialValueIfNeeded = () => {
    if (!initialSet && inputValue !== "") {
      const number = Number(inputValue);
      setCount(number);
      setInitialSet(true);
      return number;
    }
    return count;
  };

  const handleIncrease = () => {
    const base = applyInitialValueIfNeeded();
    if (initialSet) {
      const newCount = base + 1; 
      setCount(newCount);
      setActionMessage("User increased the count by 1");
    }
  };
  
  const handleDecrease = () => {
    const base = applyInitialValueIfNeeded();
    if (initialSet) {
      const newCount = base - 1; 
      setCount(newCount);
      setActionMessage("User decreased the count by 1");
    }
  };
  

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <button onClick={handleIncrease} style={{ marginRight: "50px", fontSize: "20px" }}>
        ⬆️ Increase
        </button>

        {count !== null && (
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Count: {count}
          </div>
        )}

        <button onClick={handleDecrease} style={{ marginLeft: "50px", fontSize: "20px" }}>
        ⬇️ Decrease
        </button>
      </div>

      {actionMessage && (
        <div style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {actionMessage}
        </div>
      )}
    </div>
  );
}

export default CounterDisplay;
