import React from "react";
import "./Counter.css"

const PointList = (props) => {

  return (
    <div className="displayNum">
    <ul>
      {props.pointHistory.map((entry) => (
        <li key={entry.id}>
          {entry.num} {entry.text}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default PointList;
