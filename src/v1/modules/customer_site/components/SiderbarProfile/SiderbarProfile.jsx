// Sidebar.js
import React from "react";
import "./SiderbarProfile.scss";
const Sidebar = () => {
   return (
      <div className='sidebar'>
         <ul>
            <li className='menu-item amazing-tech'>
               <span className='circle amazing-tech-circle'></span>
               Amazing Tech Pay
            </li>
            <li className='menu-item account-info active'>
               <span className='circle account-info-circle'></span>
               Thông tin tài khoản
            </li>
            <li className='menu-item order'>
               <span className='circle order-circle'></span>
               Đơn mua
            </li>
            <li className='menu-item address'>
               <span className='circle address-circle'></span>
               Địa chỉ nhận hàng
            </li>
            <li className='menu-item reset-password'>
               <span className='circle reset-password-circle'></span>
               Đặt lại mật khẩu
            </li>
            <li className='menu-item logout'>
               <span className='circle logout-circle'></span>
               Đăng xuất
            </li>
         </ul>
      </div>
   );
};

export default Sidebar;
