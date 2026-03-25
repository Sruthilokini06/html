
import React, { useState } from "react";

function App() {
  // state
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  // functions
  const increment = () => {
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React App Example</h1>

      {/* Counter */}
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increase</button>

      <br /><br />

      {/* Conditional Rendering */}
      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>

      {showMessage && <p>Hello! This is a conditional message.</p>}
    </div>
  );
}

export default App;