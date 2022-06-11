import { useState } from "react";
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button className="plusMinusBtn" onClick={() => setCount(count - 1)}> - </button>
      <h2 className="displayText"> {count} </h2>
      <button className="plusMinusBtn" onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
};

export default Counter;
