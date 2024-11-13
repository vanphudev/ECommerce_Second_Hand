import React from "react";
import "./style.scss";
import { getItem } from "../items/item";

const OrderTracking = ({ selectedOption }) => {
  const items = getItem(selectedOption); 
  const lineWidth = `${(selectedOption / items.length) * 100}%`;

  return (
    <div className="order-stepper border tws-mt-[15px] tws-px-6 tws-py-10">
      <div className="stepper tws-flex tws-justify-between tws-relative">
        {items.map((step, index) => (
          <div key={index} className={`stepper__step stepper__step_${step.status} tws-cursor-default tws-text-center tws-w-[140px] `}>
            <div className={`stepper__step_icon stepper__step_icon_${step.status} tws-bg-white tws-w-[70px] tws-h-[70px] tws-m-auto tws-text-3xl tws-flex tws-items-center tws-justify-center`}>
              {step.icon}
            </div>
            <div className="stepper__step_text tws-text-sm tws-text-black tws-capitalize tws-my-5">
              {step.text}
            </div>
            {step.date && (
              <div className="stepper__step_date tws-text-dark-gray-01 tws-text-xs">
                {step.date}
              </div>
            )}
          </div>
        ))}
        <div className="stepper__line tws-h-1 tws-absolute tws-top-8 tws-w-full">
          <div className="stepper__line_background"></div>
          <div
            className="stepper__line_foreground"
            style={{ width: lineWidth }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;