import React from "react";
import "./index.scss";

const Button = ({ actionType, type, text, onClickHandler }) => {
  return (
    <button
      type={actionType}
      className={`button ${type}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
