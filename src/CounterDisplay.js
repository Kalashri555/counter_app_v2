import React from "react";

function CounterDisplay({ value }) {
  return (
    <div style={{ fontSize: "2rem", margin: "0 30px", fontWeight: "bold" }}>
      Count: {value}
    </div>
  );
}

export default CounterDisplay;

