import React from "react";
import "./style.scss";

const CardSupport = ({ title, describe }) => {
  return (
    <div className="Main_CardSupport">
      <div className="">
        <div className="title">{title}</div>
        <div className="Card">
          <div className="Card_Item">
            {describe && <div className="describe">{describe}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSupport;
