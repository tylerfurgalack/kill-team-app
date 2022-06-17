import React from "react";
import Counter from "./Counter";
import KtLogo from "./KtLogo.jpg";
import "./CounterBar.css";

function CounterBar() {
  return (
    <div className="barContainer">
      <div className="counterContainer">
        <h2 className="displayText">Command Points</h2>
        <Counter />
      </div>
      <div className="imageContainer">
      <img src={KtLogo} alt=""  />
      </div>
      <div className="counterContainer">
        <h2 className="displayText">Victory Points</h2>
        <Counter />
      </div>
    </div>
  );
}

export default CounterBar;
