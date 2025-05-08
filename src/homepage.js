import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ count, setCount, setAction, setValue }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      setCount(count + num);
      setValue(num);
      setAction("Added");
      navigate("/result");
    }
  };

  const handleRemove = () => {
    const num = Number(inputValue);
    if (!isNaN(num)) {
      setCount(count - num);
      setValue(num);
      setAction("Removed");
      navigate("/result");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter a number</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter number"
        style={{ padding: "10px", fontSize: "18px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAdd} style={{ marginRight: "20px", fontSize: "20px" }}>
          ⬆️Increase
        </button>
        <button onClick={handleRemove} style={{ fontSize: "20px" }}>
          ⬇️Decrease
        </button>
      </div>
    </div>
  );
}

export default HomePage;
