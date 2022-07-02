import React from "react";
import "./Counter.css"

const PointList = (props) => {

  return (
    <div className="displayNum">
    <ul>
      {props.pointHistorys.map((pointHistory) => (
        <li key={pointHistory.id}>
          {pointHistory.num} {pointHistory.text}
        </li>
      ))}
    </ul>
    </div>
  );
};

export default PointList;
