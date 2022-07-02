import { useState, useRef } from "react";
import PointList from "./PointList";
import "./Counter.css";
import PointInput from "./PointInput";

const PointsTracker = () => {
  const [count, setCount] = useState(0);
  const [pointHistorys, setPointHistorys] = useState([]);
  const textInputRef = useRef();
  const [inputCount, setInputCount] = useState(0);

  const addPointHistoryHandler = (event) => {
    event.preventDefault();
    const enteredText = textInputRef.current.value;
    setPointHistorys((prevPointHistory) => {
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
      <PointInput
        inputCount={inputCount}
        textInputRef={textInputRef}
        addPointHistoryHandler={addPointHistoryHandler}
      />
      <PointList pointHistorys={pointHistorys} />
    </div>
  );
};

export default PointsTracker;
