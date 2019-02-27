import React from "react";

const Btn = ({ onClick, title, classes }) => {
  return (
    <button className={`danger-btn ${classes}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Btn;
