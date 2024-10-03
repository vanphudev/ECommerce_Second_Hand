import React from "react";
import "./style.scss";


const CardItem  = ({ icon:Icon,title }) => {
  return (
    <div className="Main_Card">
      <div className="Card">
        <div className="Card_">
          <Icon size={90} style={{color:"white"}}/>
        </div>
      </div>
      <div className="title">{title}</div>
    </div>
  );
};

export default CardItem;
