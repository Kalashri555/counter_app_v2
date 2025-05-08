import React, { useState, useEffect } from "react";

function CounterDisplay({ inputValue, actionValue, trigger }) {
  const [count, setCount] = useState(null);
  const [initialSet, setInitialSet] = useState(false);
  const [actionMessage, setActionMessage] = useState("");

  useEffect(() => {
    setInitialSet(false);
    setCount(null);
    setActionMessage("");
  }, [inputValue]);

  useEffect(() => {
    if (!initialSet && inputValue !== "") {
      setCount(Number(inputValue));
      setInitialSet(true);
    } else if (initialSet && trigger > 0) {
      if (actionValue === "increase") {
        setCount((prev) => {
          const newCount = prev + 1;
          setActionMessage("User increased the count by 1");
          return newCount;
        });
      } else if (actionValue === "decrease") {
        setCount((prev) => {
          const newCount = prev - 1;
          setActionMessage("User decreased the count by 1");
          return newCount;
        });
      }
    }
  }, [trigger, actionValue, initialSet, inputValue]);

  return (
    <div style={{ marginTop: "40px" }}>
      {count !== null && (
        <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Count: {count}
        </div>
      )}

      {actionMessage && (
        <div style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {actionMessage}
        </div>
      )}
    </div>
  );
}

export default CounterDisplay;

