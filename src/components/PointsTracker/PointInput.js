import React from "react";

const PointInput = (props) => {
  const { inputCount, textInputRef, addPointHistoryHandler } = props;
  return (
    <form onSubmit={addPointHistoryHandler}>
      <label className="displayNum"> Points History</label>
      <div className="inputContainer">
        <p className="displayNum">{inputCount}</p>
        <input id="pointInputs" type="text" ref={textInputRef}></input>
      </div>
      <button id="submitBtn" type="submit">
        Enter
      </button>
    </form>
  );
};

export default PointInput;
