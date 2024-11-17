import React from "react";
import "../Footer/styles.scss";
import logo_web from "../assets/logo-web.png";
import logo_fb from "../assets/Facebook.svg";
import logo_zalo from "../assets/Zalo.svg";
import logo_ytb from "../assets/YouTube.svg";

const WIDTH_PAGE = "1440px";
const Footer = () => {
   return (
      <>
         <footer className='tws-w-full tws-bg-purple tws-mt-10'>
            <div
               style={{width: WIDTH_PAGE, margin: "0 auto", backgroundColor: "#55018d"}}
               className='tws-flex tws-flex-col tws-flex-wrap tws-gap-5 tws-bg-[#55018d]'>
               <div class='footer-cpn'>
                  <div className='row'>
                     <div className='column-1'>
                        <h3 className='title'>Chính sách bán hàng</h3>
                        <ul className='list'>
                           <li>
                              <a href='#!'>Trang chủ</a>
                           </li>
                           <li>
                              <a href='#!'>Giới thiệu</a>
                           </li>
                           <li>
                              <a href='#!'>Sản phẩm</a>
                           </li>
                           <li>
                              <a href='#!'>Tin mới nhất</a>
                           </li>
                           <li>
                              <a href='#!'>Tuyển dụng</a>
                           </li>
                        </ul>
                     </div>
                     <div className='column-2'>
                        <h3 className='title'>Văn phòng giao dịch</h3>
                        <ul className='list'>
                           <li>
                              <a href='#!'>Địa chỉ</a>
                           </li>
                           <li>
                              <a href='#!'>Công việc</a>
                           </li>
                           <li>
                              <a href='#!'>Hoạt động</a>
                           </li>
                           <li>
                              <a href='#!'>FAQs</a>
                           </li>
                        </ul>
                     </div>
                     <div className='column-3'>
                        <h3 className='title'>Về chúng tôi</h3>
                        <ul className='list'>
                           <li>
                              <a href='#!'>Đội ngũ</a>
                           </li>
                           <li>
                              <a href='#!'>Liên hệ</a>
                           </li>
                        </ul>
                     </div>
                     <div className='column-4'>
                        <h3 className='title'>Liên lạc với chúng tôi</h3>
                        <input type='text' placeholder='First Name' className='first-name' />
                        <input type='text' placeholder='Email' className='email' />
                        <button type='button' class='send'>
                           Send
                        </button>
                     </div>
                     <div className='column-5'>
                        <a href='/'>
                           <img src={logo_web} className='logo-footer' alt=''></img>
                        </a>
                        <h3>Theo dõi chúng tôi</h3>
                        <div className='socials'>
                           <a href='#'>
                              <img src={logo_fb} alt='' className='fb' />
                           </a>
                           <a href='#'>
                              <img src={logo_zalo} alt='' className='zalo' />
                           </a>
                           <a href='#'>
                              <img src={logo_ytb} alt='' className='ytb' />
                           </a>
                        </div>
                     </div>
                  </div>
                  <ul class='cpr'>
                     <a href='#'>Chính sách bảo mật</a>
                     <a href='#'>Điều khoản sử dụng</a>
                     <a href='#'>Thanh toán và hoàn tiền</a>
                     <a href='#'>Hợp pháp</a>
                     <a href='#'>Địa điểm</a>
                  </ul>
               </div>
            </div>
            <div className='tws-w-full tws-bg-purple tws-h-[100px] tws-flex tws-items-center tws-justify-center'>
               <p className='tws-text-white'>
                  Được phát triển bởi{" "}
                  <span className='tws-font-bold'>
                     <a href='/about_team07' target='_blank' className='tws-font-bold tws-text-white tws-no-underline'>
                        THÔNG TIN NHÓM 07 - FE
                     </a>
                  </span>
               </p>
            </div>
         </footer>
      </>
   );
};

export default Footer;
