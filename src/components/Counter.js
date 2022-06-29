import { useState, useRef } from "react";
import PointHistory from "./PointHistory";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [pointList, setPointList] = useState([]);
  const textInputRef = useRef();
  const [inputCount, setInputCount] = useState(0);

  const addPointHistoryHandler = (event) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    setPointList((prevPointList) => {
      return [
        ...prevPointList,
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
  // const inputChangeHandler = (event) => {
  //   setEnteredText(event.target.value);
  // };

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
      <PointHistory pointList={pointList} />
    </div>
  );
};

export default Counter;
