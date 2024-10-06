import React from "react";
import "../styles/framDetails.scss";
import {Button} from "antd";
import Logo from "../assets/icons/logo-amazing-tech-v2.png";
import {AiFillShop} from "react-icons/ai";
export default function FrameBrand() {
   return (
      <>
         <div className='frame-details'>
            <div className='frame-brand'>
               <div className='frame-brand__content tws-flex tws-flex-nowrap tws-gap-3'>
                  <div className='frame-brand__content--img'>
                     <img src={Logo} alt='Logo brand' style={{width: "120px", height: "120px"}} />
                  </div>
                  <div className='frame-brand__content--text tws-flex tws-flex-col tws-gap-1'>
                     <span style={{fontSize: "22px", fontWeight: "850"}}>VAN PHU STORE VN</span>
                     <div className='tws-flex tws-flex-nowrap tws-gap-2 tws-items-center'>
                        <span style={{fontSize: "20px", fontWeight: "550"}}>Online 1 phút trước</span>
                        <div
                           style={{
                              width: "15px",
                              height: "15px",
                              backgroundColor: "#00FFA0",
                              borderRadius: "50%",
                           }}></div>
                     </div>
                     <div className='frame-brand__view'>
                        <Button className='btn-brand__view' icon={<AiFillShop style={{fontSize: "20px"}} />}>
                           Xem shop
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <div className='frame-brand-content tws-grid tws-grid-cols-4 tws-gap-4'>
               <div className='tws-flex tws-flex-col tws-gap-3'>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Đánh giá: </span>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Sản phẩm: </span>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Tham gia: </span>
               </div>
               <div className='tws-flex tws-flex-col tws-gap-3'>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     150,9k
                  </span>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     224
                  </span>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     2 năm trước
                  </span>
               </div>
               <div className='tws-flex tws-flex-col tws-gap-3'>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Tỉ lệ phản hồi: </span>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Thời gian phản hồi: </span>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Người theo dõi: </span>
               </div>
               <div className='tws-flex tws-flex-col tws-gap-3'>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     81%
                  </span>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     vài giờ
                  </span>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     123,5k
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}
