import { useState, useRef } from "react";
import PointHistory from "./PointHistory";
import "./Counter.css";

const Counter = () => {
  // const textInputRef = useRef();

  const [count, setCount] = useState(0);
  const [inputCount, setInputCount] = useState(0);

  // const addInputHandler = (inputCount, textInputRef) => {
  //   let input = inputCount + textInputRef
  //   return input;
  // }


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
      <form>
        <label className="displayNum"> Points History</label>
        <p className="displayNum">{inputCount}</p>
        <input id="pointInputs" type="text"></input>
        <button id="submitBtn" type="submit">
          Enter
        </button>
      </form>
      <PointHistory/>
    </div>
  );
};

export default Counter;
