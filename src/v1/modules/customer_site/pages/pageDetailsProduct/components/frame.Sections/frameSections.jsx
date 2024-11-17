import React, {useState, useRef, useEffect} from "react";
import {Button} from "antd";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import Intro_01 from "../assets/icons/intro_01.png";
import Intro_02 from "../assets/icons/intro_02.png";
import Intro_03 from "../assets/icons/intro_03.png";
import Intro_04 from "../assets/icons/intro_04.png";
import Sale_Intro from "../assets/icons/saleintro.png";
import "../styles/frameSections.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
   "https://nongtrailamdep.com/uploads/shops/2020_02/206061-extra1.jpg",
   "https://sg-live-01.slatic.net/p/2ca21cdb97b812ae0234964170e28ba7.png_525x525q80.jpg",
   "https://bizweb.dktcdn.net/thumb/1024x1024/100/480/056/products/z4955208573493-dcd7f485e4869c1b1c882ca660fccd68-1702030526198-1711619503597.jpg?v=1711619512367",
   "https://media.hcdn.vn/catalog/product/s/u/sua-rua-mat-tay-te-bao-chet-tra-xanh-lam-giam-mun-dau-den-st-ives-170g-1679385590_img_680x680_d30c8d_fit_center.jpg",
   "https://mifashop.net/wp-content/uploads/2019/05/sua-rua-mat-tay-te-bao-chet-st-ives-blackhead-clearing-green-tea-and-bamboo-scrub-170g-03.jpg",
];

const Frameitems = () => {
   function SampleNextArrow(props) {
      const {className, style, onClick} = props;
      return (
         <div className={className} style={{display: "block", background: "#55018D"}} onClick={onClick}>
            <SlArrowRight
               style={{
                  fontSize: "20px",
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
               }}
            />
         </div>
      );
   }
   function SamplePrevArrow(props) {
      const {className, style, onClick} = props;
      return (
         <div className={className} style={{display: "block", background: "#55018D"}} onClick={onClick}>
            <SlArrowLeft
               style={{
                  fontSize: "20px",
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
               }}
            />
         </div>
      );
   }
   const [nav1, setNav1] = useState(null);
   const [nav2, setNav2] = useState(null);
   const sliderRef1 = useRef(null);
   const sliderRef2 = useRef(null);

   useEffect(() => {
      setNav1(sliderRef1.current);
      setNav2(sliderRef2.current);
   }, []);

   const settingsMain = {
      asNavFor: nav2,
      ref: sliderRef1,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
   };

   const settingsThumbs = {
      asNavFor: nav1,
      ref: sliderRef2,
      slidesToShow: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      swipeToSlide: true,
      focusOnSelect: true,
      infinite: true,
   };
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
               <Slider {...settingsMain}>
                  {images.map((image, index) => (
                     <div key={index}>
                        <img src={image} alt={`slide-${index}`} style={{width: "100%", height: "auto"}} />
                     </div>
                  ))}
               </Slider>
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
               <div className='tws-mb-5'></div>
               <Slider {...settingsThumbs}>
                  {images.map((image, index) => (
                     <div key={index}>
                        <img
                           src={image}
                           alt={`thumb-${index}`}
                           style={{
                              width: "100%",
                              height: "70px",
                              objectFit: "cover",
                              borderRadius: "5px",
                              border: "1px solid #ddd",
                           }}
                        />
                     </div>
                  ))}
               </Slider>
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
