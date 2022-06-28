import React from "react";
import KtLogo from "./KtLogo.jpg";
import Counter from "./components/Counter";
import "./components/CounterBar.css";

function App() {
  return (
    <div className="barContainer">
      <div className="counterContainer">
        <h2 className="displayText">Command Points</h2>
        <Counter id="commandPoints" />
      </div>
      <div className="imageContainer">
        <img src={KtLogo} alt="" />
      </div>
      <div className="counterContainer">
        <h2 className="displayText">Victory Points</h2>
        <Counter id="victoryPoints" />
      </div>
    </div>
  );
}

export default App;
