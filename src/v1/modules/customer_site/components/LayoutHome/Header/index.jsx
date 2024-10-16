import React from "react";
import '../Header/styles.scss';
import logo_web from '../assets/logo-web.png'
import icon_4 from '../assets/logo-pay.svg'
import icon_1 from '../assets/personal.svg'
import icon_2 from '../assets/favorite.svg'
import icon_3 from '../assets/cart.svg'
import { AiOutlineSearch } from "react-icons/ai";
import icon_5 from '../assets/gach-menu.svg'
import icon_menu_1 from '../assets/icon_megamenu_1.png'
import icon_menu_2 from '../assets/icon_megamenu_2.png'
import icon_menu_3 from '../assets/icon_megamenu_3.png'
import icon_menu_4 from '../assets/icon_megamenu_4.png'
import icon_menu_5 from '../assets/icon_megamenu_5.png'
import icon_menu_6 from '../assets/icon_megamenu_6.png'
import icon_menu_7 from '../assets/icon_megamenu_7.png'
import icon_menu_8 from '../assets/icon_megamenu_8.png'
import icon_menu_9 from '../assets/icon_megamenu_9.png'
import icon_menu_10 from '../assets/icon_megamenu_10.png'
import { AiOutlineRight } from "react-icons/ai";


const Header = () => {
   return (
      <div class="header-cpn">
         <div class="header-cpn-1">
            <a href="#"><img src={logo_web} className="logo" alt=""></img></a>

            <div class="search-container">
               <div class="search-box">
                  <input type="text" placeholder="Nhập tên sản phẩm..." className="search-input" />
                  <button class="search-button"><AiOutlineSearch /></button>
               </div>
               <ul class="list-search-key">
                  <li><a>Sữa rửa mặt</a></li>
                  <li><a>Giày nữ</a></li>
                  <li><a>Trang điểm</a></li>
                  <li><a>Quần áo nam</a></li>
               </ul>
            </div>

            <ul class="menu">
               <li>
                  <a><img src={icon_1} className="log-in" alt=""></img></a>
                  <div class="menu-gap">
                     <div>Đăng nhập</div>
                     <div>Đăng kí</div>
                  </div>
               </li>
               <li>
                  <a><img src={icon_2} className="favorite" alt=""></img></a>
                  <div class="menu-gap">
                     <div>Yêu thích</div>
                     <div><a class="word-color">2</a> sản phẩm</div>
                  </div>
               </li>
               <li>
                  <a><img src={icon_3} className="cart" alt=""></img></a>
                  <div class="menu-gap">
                     <div>Giỏ hàng</div>
                     <div><a class="word-color">48</a> sản phẩm</div>
                  </div>
               </li>
               <li>
                  <a><img src={icon_4} className="logo-pay" alt=""></img></a>
                  <div class="menu-gap">
                     <div>Đăng kí</div>
                     <div class="word-color">Ví Amazing Pay</div>
                  </div>
               </li>
            </ul>
         </div>

         <div class="header-cpn-2">
            <div class="header-list">

               <div class="menu-hover">
                  <button class="word-color-2"><img src={icon_5} className="gach-menu" alt=""></img>Danh mục sản phẩm</button>
                  <div class="dropdown-content">
                     <a href="#" class="dc-a1"><img src={icon_menu_1} className="icon-m" alt=""></img><p>Trang Điểm</p><AiOutlineRight />
                        <div class="dd-ct-submenu">
                           <div class="dd-ct-submenu-container">
                              <div className="submenu-col-1">
                                 <h4 className="title-submenu">Trang Điểm Mặt</h4>
                                 <ul className="list-submenu">
                                    <li>Kem lót/base</li>
                                    <li>Che khuyết điểm</li>
                                    <li>Bb cream/kem nền</li>
                                    <li>Phấn nước cushion</li>
                                    <li>Má hồng</li>
                                    <li>Tạo khối/highlighter</li>
                                    <li>Phấn phủ</li>
                                 </ul>
                              </div>
                              <div className="submenu-col-2">
                                 <h4 className="title-submenu">Trang Điểm Mắt</h4>
                                 <ul className="list-submenu">
                                    <li>Kẻ chân mày</li>
                                    <li>Phấn mắt/nhũ mắt</li>
                                    <li>Kẻ viền mắt/mascara</li>
                                    <li>Mi giả/keo dán mi</li>
                                 </ul>
                              </div>
                              <div className="submenu-col-3">
                                 <h4 className="title-submenu">Trang Điểm Môi</h4>
                                 <ul className="list-submenu">
                                    <li>Son tint/son kem</li>
                                    <li>Son thỏi</li>
                                    <li>Son dưỡng/trị thâm môi</li>
                                    <li>Son bóng</li>
                                    <li>Mặt nạ ngủ môi/tẩy da chết môi</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="dc-a2"><img src={icon_menu_2} className="icon-m" alt=""></img><p>Chăm sóc da mặt</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a3"><img src={icon_menu_3} className="icon-m" alt=""></img><p>Chăm sóc cơ thể</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a4"><img src={icon_menu_4} className="icon-m" alt=""></img><p>Chăm sóc tóc và da đầu</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a5"><img src={icon_menu_5} className="icon-m" alt=""></img><p>Chăm sóc cá nhân</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a6"><img src={icon_menu_6} className="icon-m" alt=""></img><p>Nước hoa</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a7"><img src={icon_menu_7} className="icon-m" alt=""></img><p>Thiết bị làm đẹp</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a8"><img src={icon_menu_8} className="icon-m" alt=""></img><p>Thực phẩm chức năng</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a9"><img src={icon_menu_9} className="icon-m" alt=""></img><p>Dụng cụ trang điểm</p><AiOutlineRight /></a>
                     <a href="#" class="dc-a10"><img src={icon_menu_10} className="icon-m" alt=""></img><p>Mini/Sample</p><AiOutlineRight /></a>
                  </div>
               </div>

               <div class="header-menu-navbar">
                  <ul>
                     <a href="#" class="word-color">Trang chủ</a>
                     <a href="#" class="word-color-1">Giới thiệu</a>
                     <a href="#" class="word-color-1">Sản phẩm mới</a>
                     <a href="#" class="word-color-1">Nổi bật</a>
                     <a href="#" class="word-color-1">Khuyến mãi</a>
                     <a href="#" class="word-color-1">Liên hệ</a>
                     <a href="#" class="word-color-1">Chính sách thanh toán</a>
                  </ul>
               </div>
            </div>
         </div>


      </div>
   );
};

export default Header;

