import React from "react";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import Sale_01 from "../assets/Images/sale-01.png";
import Bg_Sale from "../assets/icons/bg-sale.svg";
import {Button} from "antd";
import "../styles/cardSale.scss";

const CardSale = () => {
   return (
      <>
         <div
            className='card-sale tws-flex tws-flex-nowrap tws-gap-4 tws-items-center'
            style={{
               backgroundImage: `url(${Bg_Sale})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "center",
               padding: "15px",
               borderRadius: "10px",
            }}>
            <div className='card-sale__img' style={{width: "60px", height: "60px"}}>
               <img src={Sale_01} alt='sale' style={{width: "100%", height: "100%"}} />
            </div>
            <div className='card-sale__content tws-flex tws-flex-col tws-gap-1 tws-relative'>
               <div className='card-sale__help tws-absolute tws-right-0 -tws-top-0'>
                  <AiOutlineQuestionCircle style={{color: "#55018D", fontSize: "20px"}} />
               </div>
               <div className='card-sale__title'>VANPHU</div>
               <div className='card-sale__desc'>Giảm 10.000đ giá trị đơn hàng</div>
               <div className='card-sale__btn tws-flex tws-justify-between tws-items-center tws-gap-4'>
                  <p style={{color: "#55018D", fontWeight: "700", fontSize: "10px"}}>Ngày hết hạn: 1/1/2025</p>
                  <Button
                     className='btn-copy tws-bg-yellow tws-text-white'
                     style={{fontSize: "10px", width: "60px", height: "23px"}}>
                     Sao chép
                  </Button>
               </div>
            </div>
         </div>
      </>
   );
};

export default CardSale;
