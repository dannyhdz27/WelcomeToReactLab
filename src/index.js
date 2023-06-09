// Your code here!
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Counter = () => {
  const increment = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);
  return (
    <div id="container">
      <div id="navbar">Counter.js</div>
      <div id="counter">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};
ReactDOM.render(<Counter />, document.getElementById("app"));
