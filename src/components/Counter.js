import { useState, useRef } from "react";
import PointList from "./PointList";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [pointHistory, setPointHistory] = useState([]);
  const textInputRef = useRef();
  const [inputCount, setInputCount] = useState(0);

  const addPointHistoryHandler = (event) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    setPointHistory((prevPointHistory) => {
      return [
        ...prevPointHistory,
        {
          num: inputCount,
          text: enteredText,
          id: Math.random().toString(),
        },
      ];
    });
    setInputCount(0);
    textInputRef.current.value = "";
  };

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
      <form onSubmit={addPointHistoryHandler}>
        <label className="displayNum"> Points History</label>
        <p className="displayNum">{inputCount}</p>
        <input id="pointInputs" type="text" ref={textInputRef}></input>
        <button id="submitBtn" type="submit">
          Enter
        </button>
      </form>
      <PointList pointHistory={pointHistory} />
    </div>
  );
};

export default Counter;
