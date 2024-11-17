import "./styles.scss";
import React, {useState} from "react";
import {Button, Tag, Tooltip} from "antd";
import {ShoppingCartOutlined, HeartOutlined, HeartFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";
import product_img from "./assets/product.jpg";
import product_logo from "./assets/vendorimg_1.png";
import free_img from "./assets/free.png";

const Card = () => {
   const [isLiked, setIsLiked] = useState(false);
   const [cartCount, setCartCount] = useState(0);

   const handleAddToCart = () => {
      setCartCount(cartCount + 1);
      alert("Đã thêm sản phẩm vào giỏ hàng!");
   };

   const handleToggleLike = () => {
      setIsLiked(!isLiked);
   };

   return (
      <div className='tws-flex tws-flex-col tws-gap-2 tws-p-2  tws-max-w-[250px]  tws-min-w-[250px] tws-max-h-[490px] tws-min-h-[490px]'>
         <div className='tws-w-[100%] tws-relative tws-object-cover'>
            <img src={product_img} alt='Product Image' className='tws-w-[100%]' />
            <div className='tws-absolute tws-bottom-0 tws-right-0'>
               <img src={product_logo} alt='' />
            </div>
         </div>
         <div className='tws-flex tws-flex-nowrap tws-justify-between tws-gap-3 tws-items-center'>
            <div className='tws-flex tws-flex-col tws-gap-1 tws-justify-start'>
               <span className='tws-text-red tws-font-bold tws-text-[22px]'>85.000₫</span>
               <span className='tws-text-gray tws-font-[700] tws-text-[16px] tws-line-through'>90.000₫</span>
            </div>
            <div className='tws-fle tws-flex-col tws-justify-around tws-items-center'>
               <span className='tws-bg-red tws-p-1 tws-text-white '>-6%</span>
            </div>
            <div className='tws-fle tws-flex-col tws-justify-between tws-items-center tws-w-[30px] tws-object-cover'>
               <img src={free_img} alt='' className='tws-w-[100%]' />
            </div>
         </div>
         <div className='tws-w-[100%]'>
            <Link
               className='tws-font-bold tws-text-black tws-no-underline'
               to={import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_DETAILS_PRODUCT}>
               <span>Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml ...</span>
            </Link>
         </div>
         <div className='tws-flex tws-flex-wrap tws-justify-start tws-items-center tws-gap-1'>
            <Tag color='#55018D'>#topsanpham</Tag>
            <Tag color='#55018D'>#topsanpham</Tag>
            <Tag color='#55018D'>#topsanpham</Tag>
         </div>
         <div className='tws-flex tws-flex-nowrap tws-justify-end tws-items-center'>
            <span className='tws-text-purple text-[15px]'>Đã bán 54,3k</span>
         </div>
         <div className='tws-flex tws-flex-nowrap tws-justify-between tws-gap-3 tws-items-center'>
            <Button
               icon={<ShoppingCartOutlined />}
               onClick={handleAddToCart}
               style={{
                  borderRadius: 4,
                  flex: 1,
                  fontSize: 16,
                  marginRight: 8,
                  backgroundColor: "#55018D",
                  color: "white",
                  flex: 1,
                  margin: "0px",
               }}>
               Thêm vào giỏ
            </Button>
            <Tooltip title={isLiked ? "Bỏ thích" : "Thích"}>
               <Button
                  shape='default'
                  icon={isLiked ? <HeartFilled style={{color: "red"}} /> : <HeartOutlined style={{color: "white"}} />}
                  onClick={handleToggleLike}
                  style={{
                     border: "none",
                     backgroundColor: "#FAC126",
                     padding: "8px",
                     borderRadius: "4px",
                     width: "50px",
                  }}
               />
            </Tooltip>
         </div>
      </div>
   );
};
export default Card;
