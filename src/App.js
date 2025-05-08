import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import ResultPage from "./resultpage";

function App() {
  const [count, setCount] = useState(0); // Total count
  const [action, setAction] = useState(""); // 'Added' or 'Removed'
  const [value, setValue] = useState(0); // What number was added/removed

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage count={count} setCount={setCount} setAction={setAction}
              setValue={setValue}
            />
          }
        />
        <Route
          path="/result"
          element={<ResultPage action={action} value={value} count={count} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
