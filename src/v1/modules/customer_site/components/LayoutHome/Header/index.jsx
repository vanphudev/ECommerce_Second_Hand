import React, { useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "../../CardModalCart/CartModal"
import "./style.scss"

import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Logo from "../../../assets/icons/logo-amazing-tech.png";

const Header = () => {

   const [isSearch, setIsSearch] = useState(false);
   const openSearch = () => {
      setIsSearch((prevState) => !prevState);
   };
   const landingLink = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_LANDING_DEFAULT;
   const cartLink = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_CART;
   const detailOrderLink = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_DETAIL_ORDER;
   return (
      <>
         <div className="header">
            <div className="fixed">
               <div className="container">
                  <div className="menu">
                     <div className="logo">
                        <Link to={"/"}>
                           <img src={Logo} className="logo" alt="Logo" />
                        </Link>
                     </div>
                     <div className="navbar">
                        <li>
                           <Link to={"/"} className="menu-item">
                              Home
                           </Link>
                        </li>
                        <li>
                           <Link to={landingLink} className="menu-item">
                              Landing
                           </Link>
                        </li>
                     </div>
                     <div className="menu-icon">
                        <div>
                           <div className={`search ${isSearch ? "active" : ""}`}>
                              <input type="search" placeholder="Tìm kiếm....." />
                           </div>
                           <Link to={"#"} className="menu-item" onClick={openSearch}>
                              <IoSearchSharp />
                           </Link>
                        </div>
                        <div className="cart-icon">
                           <DropdownMenu link={cartLink} />

                        </div>
                        <div className="info-icon">
                           <Link to={detailOrderLink} >
                              <FaUser />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </>
   );
};

export default Header;
