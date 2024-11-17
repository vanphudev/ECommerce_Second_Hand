import React from "react";
import {Button} from "antd";
import "../../styles/framDetails.scss";
import Logo from "../../assets/icons/logo-amazing-tech-v2.png";
import {AiFillShop} from "react-icons/ai";
export default function FrameBrand() {
   return (
      <>
         <div className='frame-details tws-w-[100%] tws-justify-between'>
            <div
               className='frame-brand  tws-text-white'
               style={{
                  backgroundImage: `url(https://s3-alpha-sig.figma.com/img/820c/7c62/92c7f9623a98f3ca77f9a40e92021253?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I4Up3BmT-tdVZAVJE~XLGGcPIziu2WMQOJGyovrFh3ktTaISYdFg6nXVNbc-LTAPsUZ9DfJvjg5D9Q5W5e8dIpZCX4PcfxWdeGKlOShdDJ6v7fLmY9BbteNGMu4PUMVJVQINWmyP3QdfuenJdbVSenQYtarlBqo2QjvjYJL3KGIfMi4~5ky5YAVulk6PpyZg2fSsCyGkNV1F~vkPOfxjFLA1ni~sh33AwTbCn8Nj0OzaNPNjo-ORJ~GUiZv484-WskU7jULn5CKXWnU2aRV0zJ7DBaV~A68pbMX1IqnMZw1eoOSrIRHBZgVcJSbh8QS~1hBrLnMmV~5BvnH1UjfM2A__)`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  padding: "15px",
               }}>
               <div className='frame-brand__content tws-flex tws-flex-nowrap tws-gap-3'>
                  <div className='frame-brand__content--img'>
                     <img src={Logo} alt='Logo brand' style={{width: "100px", height: "100px"}} />
                  </div>
                  <div className='frame-brand__content--text tws-flex tws-flex-col tws-gap-1'>
                     <span style={{fontSize: "22px", fontWeight: "850"}}>VAN PHU STORE VN</span>
                     <div className='tws-flex tws-flex-1 tws-flex-nowrap tws-gap-2 tws-items-center'>
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
                        <Button className='btn-brand__view'>Theo dõi shop</Button>
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
