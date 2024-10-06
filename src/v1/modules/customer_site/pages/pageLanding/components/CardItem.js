import React from "react";
import "./style.scss";

const CardItem = ({ icon: Icon, title }) => {
  return (
    <div className="Main_Card tws-flex tws-flex-col tws-items-center ">
      <div className="Card tws-rounded-[40px] tws-border tws-border-black tws-p-[5px] tws-w-[152px]">
        <div className="Card_ tws-w-[140px] tws-h-[140px] tws-bg-[rgba(217,217,217,0)] tws-rounded-[40px] tws-border tws-border-white tws-flex tws-justify-center tws-items-center tws-relative">
          <Icon size={90} style={{ color: "white" }} />
        </div>
      </div>
      <div className="title pt-4">{title}</div>
    </div>
  );
};

export default CardItem;