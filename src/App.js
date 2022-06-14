import React from "react";
import Counter from "./components/Counter";
import KtLogo from "./KtLogo.jpg";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <div>
        <h2 className="displayText">Command Points</h2>
        <Counter />
      </div>
      <div className="imageContainer">
      <img scr={KtLogo} alt=""  />
      </div>
      <div>
        <h2 className="displayText">Victory Points</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
