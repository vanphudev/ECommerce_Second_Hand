import React, {useState} from "react";
import {Button} from "antd";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import Intro_01 from "../assets/icons/intro_01.png";
import Intro_02 from "../assets/icons/intro_02.png";
import Intro_03 from "../assets/icons/intro_03.png";
import Intro_04 from "../assets/icons/intro_04.png";
import Sale_Intro from "../assets/icons/saleintro.png";
import Product_01 from "../assets/Images/ss-product-01.png";
import "../styles/frameSections.scss";

const Frameitems = () => {
   const [quantity, setQuantity] = useState(1);
   const handleMinus = () => {
      if (quantity === 1) return;
      setQuantity(quantity - 1);
   };
   const handlePlus = () => {
      if (quantity === 10) return;
      setQuantity(quantity + 1);
   };
   return (
      <>
         <div className='frame-item tws-grid tws-grid-cols-[460px_365px_270px] tws-gap-3'>
            <div className='frame-item__img tws-relative'>
               <img src={Product_01} alt='Sản phẩm 01' style={{minWidth: "100%"}} />
               <div
                  className='tws-absolute tws-bottom-32 tws-left-0'
                  style={{
                     backgroundColor: "rgba(254, 245, 194, 0.8)",
                     width: "100%",
                     padding: "10px",
                  }}>
                  <div>
                     <span style={{color: "black", fontWeight: "500"}}>Kết thúc trong:</span>
                     <span style={{color: "#55018D", fontWeight: "bold"}}> Chương trình đã hết hạn</span>
                  </div>
                  <div>
                     <span style={{color: "black", fontWeight: "500"}}>Số lượng đã bán:</span>
                     <span style={{color: "#ef1104", fontWeight: "bold", fontSize: "24px"}}> 100</span>
                  </div>
               </div>
            </div>
            <div className='tws-container tws-flex tws-flex-col tws-gap-y-3'>
               <div className='frame-item__name-product'>Sữa Rửa Mặt St.Ives Tẩy Tế Bào Chết Trà Xanh Ngừa Mụn</div>
               <div className='frame-item__typeProduct'>
                  <div>
                     <span style={{color: "black", fontWeight: "500"}}>Thương hiệu:</span>
                     <span style={{color: "#55018D", fontWeight: "bold"}}>St.Ives</span>
                  </div>
                  <div>
                     <span style={{color: "black", fontWeight: "500"}}>Loại sản phẩm:</span>
                     <span style={{color: "#55018D", fontWeight: "bold"}}>Sữa rửa mặt</span>
                  </div>
                  <div>
                     <span style={{color: "black", fontWeight: "500"}}>Tình trạng:</span>
                     <span style={{color: "#55018D", fontWeight: "bold"}}>Còn hàng</span>
                  </div>
               </div>
               <div className='frame-item__price'>
                  <div className='tws-flex tws-gap-2 tws-items-end'>
                     <span style={{color: "#EF1104", fontWeight: "bold", fontSize: "25px"}}> 100.000đ</span>
                     <span
                        style={{
                           color: "#ACACAC",
                           fontWeight: "bold",
                           fontSize: "15px",
                           textDecoration: "line-through",
                        }}>
                        100.000đ
                     </span>
                  </div>
                  <div>
                     <span style={{color: "black", fontWeight: "500"}}>Tiết kiệm: </span>
                     <span style={{color: "#EF1104", fontWeight: "bold"}}> 100.000đ</span>
                  </div>
               </div>
               <div className='frame-item__step tws-flex tws-flex-col'>
                  <div style={{padding: "8px 0px"}}>
                     <span style={{color: "black", fontWeight: "700"}}>Chiết xuất</span>
                  </div>
                  <div className='tws-flex tws-flex-wrap tws-gap-1'>
                     <Button className='btn-active-step'>Trà xanh</Button>
                     <Button className='btn-nonactive-step'>Mơ (Da mụn)</Button>
                     <Button className='btn-nonactive-step'>Mơ</Button>
                     <Button className='btn-nonactive-step'>Dừa & cafe</Button>
                     <Button className='btn-nonactive-step'>Hoa hồng & lô hội</Button>
                     <Button className='btn-nonactive-step'>Bơ & mật ong</Button>
                  </div>
               </div>
               <div className='frame-item__quantity'>
                  <div style={{padding: "8px 0px"}}>
                     <span style={{color: "black", fontWeight: "700"}}>Số lượng</span>
                  </div>
                  <div className='tws-flex tws-items-center tws-gap-1'>
                     <Button onClick={handleMinus} className='btn-Minus' icon={<AiOutlineMinus />}></Button>
                     <input
                        className='input-quantity'
                        style={{fontWeight: "bold"}}
                        readOnly
                        type='text'
                        name='soluong'
                        id=''
                        value={quantity}
                     />
                     <Button onClick={handlePlus} className='btn-Plus' icon={<AiOutlinePlus />}></Button>
                  </div>
               </div>
               <div className='frame-item__buyAndToCard tws-flex tws-items-center tws-justify-center tws-gap-2'>
                  <Button className='btn-addToCard'>Thêm vào giỏ hàng</Button>
                  <Button className='btn-BuyNow'>Mua ngay</Button>
               </div>
            </div>
            <div className='tws-flex tws-flex-col tws-flex-wrap tws-gap-4'>
               <div className='tws-relative'>
                  <div
                     className='frame-item__title-sale tws-flex tws-items-center tws-gap-4 tws-justify-center tws-border-2 tws-text-dark-purple tws-p-1 tws-absolute -tws-top-4 tws-bg-white tws-m-auto tws-left-0 tws-right-0'
                     style={{width: "70%", borderRadius: "20px", border: "1px solid #55018d"}}>
                     <img src={Sale_Intro} alt='Sale Intro' style={{width: "25px"}} />
                     <span style={{fontWeight: "800", fontSize: "11px"}} className='tws-text-dark-purple'>
                        Khuyến mãi đặc biệt !!!
                     </span>
                  </div>
                  <div
                     className='frame-item__content-sale tws-flex tws-items-center tws-gap-4 tws-flex-col tws-border-dotted tws-border-2 tws-text-dark-purple '
                     style={{borderRadius: "10px", padding: "25px 10px 10px 10px"}}>
                     <span style={{color: "black", fontWeight: "400"}}>
                        "Tưng bừng khai trương" - Giảm 10% cho tất cả các sản phẩm
                     </span>
                     <span style={{color: "black", fontWeight: "400"}}>
                        Giảm thêm 10.000đ cho đơn hàng từ 200k trở lên
                     </span>
                  </div>
               </div>
               <div className='tws-flex tws-flex-col tws-flex-wrap tws-gap-4'>
                  <div className='item-card-intro tws-flex tws-flex-nowrap tws-items-center tws-gap-2'>
                     <div className='item-card-intro__icon'>
                        <img src={Intro_01} alt='Intro 01' />
                     </div>
                     <div className='item-card-intro__content tws-flex tws-flex-col tws-gap-1'>
                        <span style={{color: "#D4963D", fontWeight: "bold", fontSize: "15px"}}>
                           Miễn phí vận chuyển
                        </span>
                        <span
                           style={{
                              color: "#FFFFFF",
                              fontWeight: "450",
                              fontSize: "11px",
                           }}>
                           Cho tất cả đơn hàng trong nội thành Hồ Chí Minh
                        </span>
                     </div>
                  </div>
                  <div className='item-card-intro tws-flex tws-flex-nowrap tws-items-center tws-gap-2'>
                     <div className='item-card-intro__icon'>
                        <img src={Intro_02} alt='Intro 01' />
                     </div>
                     <div className='item-card-intro__content tws-flex tws-flex-col tws-gap-1'>
                        <span style={{color: "#D4963D", fontWeight: "bold", fontSize: "15px"}}>
                           Miễn phí vận chuyển
                        </span>
                        <span
                           style={{
                              color: "#FFFFFF",
                              fontWeight: "450",
                              fontSize: "11px",
                           }}>
                           Cho tất cả đơn hàng trong nội thành Hồ Chí Minh
                        </span>
                     </div>
                  </div>
                  <div className='item-card-intro tws-flex tws-flex-nowrap tws-items-center tws-gap-2'>
                     <div className='item-card-intro__icon'>
                        <img src={Intro_03} alt='Intro 01' />
                     </div>
                     <div className='item-card-intro__content tws-flex tws-flex-col tws-gap-1'>
                        <span style={{color: "#D4963D", fontWeight: "bold", fontSize: "15px"}}>
                           Miễn phí vận chuyển
                        </span>
                        <span
                           style={{
                              color: "#FFFFFF",
                              fontWeight: "450",
                              fontSize: "11px",
                           }}>
                           Cho tất cả đơn hàng trong nội thành Hồ Chí Minh
                        </span>
                     </div>
                  </div>
                  <div className='item-card-intro tws-flex tws-flex-nowrap tws-items-center tws-gap-2'>
                     <div className='item-card-intro__icon'>
                        <img src={Intro_04} alt='Intro 01' />
                     </div>
                     <div className='item-card-intro__content tws-flex tws-flex-col tws-gap-1'>
                        <span style={{color: "#D4963D", fontWeight: "bold", fontSize: "15px"}}>
                           Miễn phí vận chuyển
                        </span>
                        <span
                           style={{
                              color: "#FFFFFF",
                              fontWeight: "450",
                              fontSize: "11px",
                           }}>
                           Cho tất cả đơn hàng trong nội thành Hồ Chí Minh
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Frameitems;
