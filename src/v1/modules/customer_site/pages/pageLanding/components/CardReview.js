import React from "react";
import "./style.scss";
import { IoStar } from "react-icons/io5";
import imageAvatar from "src/v1/modules/customer_site/pages/pageLanding/assets/images/avatar.jpg";
const CardReview = ({ icon: Icon, title, image, date, name }) => {
  return (
    <div className="Main_CardReview tws-m-0 tws-mr-5 tws-w-[550px] tws-h-[350px] tws-bg-white tws-shadow-[0px_7px_8px_#767676] tws-p-[40px] tws-leading-[35px] tws-rounded-[40px]">
      <div className="Card">
        <div className="icon tws-text-[25px] tws-flex tws-gap-[10px] tws-pb-[10px]">
          {Array.from({ length: 4 }, (_, index) => (
            <IoStar key={index} />
          ))}
        </div>
        <div className="title tws-text-left">{title}</div>
        <div className="Card_Name tws-pt-[30px] tws-flex">
          <div>
            <img src={imageAvatar} alt={name} className="review-image tws-w-[70px] tws-h-[70px] tws-rounded-full" />
          </div>
          <div className="Name tws-pl-[30px] ">
            <h2 className="tws-text-black tws-text-[25px] tws-font-bold">{name}</h2>
            <p className="tws-text-black tws-text-[20px]">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
