import React from "react";
import "./style.scss";

const ButtonConfirm = ({selectedOption, onConfirmClick, showBuyBack, showEvaluate}) => {
   const checkselectedOption = () => {
      if (selectedOption === 3) {
         return "highlight";
      }
      return "";
   };

   const getMessage = () => {
      if (showEvaluate) {
         return "Nếu hàng nhận được có vấn đề, bạn có thể gửi yêu cầu Trả hàng/Hoàn tiền trước 10-11-2024";
      }
      return "Ngày nhận hàng dự kiến từ 15-09-2024 đến 18-09-2024. Lưu ý đây là đơn hàng Thanh toán khi nhận hàng.";
   };

   const btn = () => {
      if (showEvaluate) {
         return <button className='btn_xn_lh btn_Evaluate'>Đánh giá</button>;
      }
      return (
         <button className='btn_xn_lh' onClick={onConfirmClick}>
            Đã nhận hàng
         </button>
      );
   };

   return (
      <>
         <div className='btn_main tws-my-[15px]'>
            <div className={`btnConfirm flex tws-justify-between  tws-border-ra border  ${checkselectedOption()}`}>
               <div>
                  <p>{getMessage()}</p>
               </div>
               <div className='btnConfirm_btn '>{btn()}</div>
            </div>
            <div className='btn_Contact flex border'>
               <button className='btn_xn_lh'>Liên hệ người bán</button>
            </div>
            {showBuyBack && (
               <div className='btn_buyBack'>
                  <div className='btn_Contact flex border'>
                     <button className='btn_xn_lh'>Yêu cầu trả hàng/Hoàn tiền</button>
                  </div>
                  <div className='btn_Contact  border tws-justify-end tws-flex'>
                     <button className='btn_xn_lh '>Mua lại</button>
                  </div>
               </div>
            )}
         </div>
      </>
   );
};

export default ButtonConfirm;
