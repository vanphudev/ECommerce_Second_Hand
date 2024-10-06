import React from "react";
import "../styles/frameInfoProduct.scss";
import MenuTitle from "../../../../components/MenuTitle/MenuTitle";
const FrameInfoProduct = () => {
   return (
      <>
         <div className='frame-infoproduct'>
            <MenuTitle name={"Thông tin sản phẩm"} />
            <div className='frame-brand-content tws-grid tws-grid-cols-[20%_80%] tws-gap-4 tws-h-full'>
               <div className='tws-flex tws-flex-col tws-gap-2 tws-h-full'>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Danh mục: </span>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Bảo hành: </span>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Thương hiệu: </span>
                  <span style={{fontWeight: "550", fontSize: "20px"}}>Tỉ lệ sản phẩm: </span>
               </div>
               <div className='tws-flex tws-flex-col tws-gap-2 tws-h-full'>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     Mỹ phẩm
                  </span>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     Không bảo hành
                  </span>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     Simple
                  </span>
                  <span className='tws-text-dark-purple' style={{fontWeight: "750", fontSize: "20px"}}>
                     99%
                  </span>
               </div>
            </div>
         </div>
      </>
   );
};

export default FrameInfoProduct;
