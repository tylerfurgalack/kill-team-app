import { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputCount, setInputCount] = useState(0);

  // useEffect(() => {

  // })

  return (
    <div>
      <div className="container">
        <button
          id="minBtn"
          className="plusMinusBtn"
          onClick={() => {
            setCount(count - 1);
            setInputCount(inputCount - 1);
          }}
        >
          -
        </button>
        <h2 className="displayNum"> {count} </h2>
        <button
          id="plusBtn"
          className="plusMinusBtn"
          onClick={() => {
            setCount(count + 1);
            setInputCount(inputCount + 1);
          }}
        >
          +
        </button>
      </div>
      <label className="displayNum"> Points History</label>
      <input type="text" value={inputCount} readOnly></input>
      <button id="submitBtn" type="submit">Enter</button>
    </div>
  );
};

export default Counter;
