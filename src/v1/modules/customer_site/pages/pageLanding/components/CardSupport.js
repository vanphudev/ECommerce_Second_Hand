import React from "react";
import "./style.scss";

const CardSupport = ({ title, describe }) => {
  return (
    <div className="Main_CardSupport tws-relative">
      <div className="">
        <div className="title tws-bg-white tws-border tws-border-[#FAC126] tws-w-[225px] tws-h-[90px] tws-rounded-[10px] tws-font-extrabold tws-text-[25px] tws-text-center tws-absolute tws-top-[-45px] tws-left-1/2 tws--translate-x-1/2 tws-p-[10px]">{title}</div>
        <div className="Card tws-border tws-border-[#FAC126] tws-w-[380px] tws-h-[200px] tws-p-[10px] tws-rounded-[10px]">
          <div className="Card_Item tws-p-[10px] tws-w-[360px] tws-h-[180px] tws-bg-[color] tws-rounded-[10px] tws-text-white tws-text-[22px] tws-font-normal tws-text-center tws-flex tws-items-center tws-justify-center">
            {describe && <div className="describe">{describe}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSupport;
