import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import "./style.scss";
const Title = () => {
  return (
    <>
      <div className="title_main flex border tws-justify-between tws-font-medium tws-border-ra tws-px-[5px] tws-py-[10px]">
        <div className="flex tws-cursor-pointer">
          <MdArrowBackIos />
          <p>Trở về</p>
        </div>
        <div>
          <p>
            MÃ ĐƠN HÀNG:
            <span className="tws-text-dark-orange"> 240910KKVHQ4AE</span>
          </p>
        </div>
        <div>
          <span className="tws-text-dark-orange">ĐẶT HÀNG THÀNH CÔNG</span>
        </div>
      </div>
    </>
  );
};

export default Title;
