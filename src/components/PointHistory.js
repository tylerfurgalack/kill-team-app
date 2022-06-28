import React from "react";
import "./Counter.css"

const PointHistory = (props) => {

  return (
    <div className="displayNum">
    <ul>
      {props.pointList.map((entry) => (
        <li key={entry.id}>
          {entry.num} {entry.text}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default PointHistory;
