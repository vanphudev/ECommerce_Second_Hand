import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import ProductModal from "./cartProductModal";
import {FaCartShopping} from "react-icons/fa6";
const DropdownMenu = ({link}) => {
   return (
      <div className='dropdown tws-relative tws-inline-block'>
         <Link to={link} className='dropdown_dart tws-cursor-pointer'>
            <FaCartShopping />
         </Link>
         <div className='dropdown_content tws-hidden tws-absolute tws-bg-white tws-min-w-[400px] tws-min-h-[300px] tws-z-1 tws-right-0 tws-p-2.5'>
            <Link className='link_product'>
               <ProductModal />
            </Link>
            <Link className='link_product'>
               <ProductModal />
            </Link>
            <Link className='link_product'>
               <ProductModal />
            </Link>
            <Link className='link_product'>
               <ProductModal />
            </Link>
            <div>
               <hr />
            </div>
            <div className='view_cart tws-flex tws-items-center tws-justify-between tws-my-5'>
               <div className='text'>23 sản phẩm được thêm</div>
               <div>
                  <Link className='link_view tws-text-white tws-p-2.5 tws-no-underline tws-rounded-lg' to={link}>
                     Xem giỏ hàng
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DropdownMenu;
