import React from "react";
import "./style.scss";
import { IoStar } from "react-icons/io5";
import imageAvatar from "src/v1/modules/customer_site/pages/pageLanding/assets/images/avatar.jpg";
const CardReview = ({ icon: Icon, title, image, date, name }) => {
  return (
    <div className="Main_CardReview">
      <div className="Card">
        <div className="icon">
          {Array.from({ length: 4 }, (_, index) => (
            <IoStar key={index} />
          ))}
        </div>
        <div className="title">{title}</div>
        <div className="Card_Name">
          <div>
            <img src={imageAvatar} alt={name} className="review-image" />
          </div>
          <div className="Name">
            <h2>{name}</h2>
            <p>{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReview;
