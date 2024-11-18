import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import ProductModal from "./cartProductModal";
import icon_3 from "../../components/LayoutHome/assets/cart.svg";
const DropdownMenu = ({ link }) => {
  return (
    <div className="dropdown tws-relative tws-inline-block">
      <div className="tws-flex tws-items-center">
        <Link to={link}>
          <img src={icon_3} className="cart tws-pr-2" alt=""></img>
        </Link>

        <div class="menu-gap">
          <Link
            to={link}
            className="dropdown_dart tws-cursor-pointer tws-font-bold tws-text-white tws-no-underline"
          >
            Giỏ hàng
          </Link>
          <div>
            <a class="word-color">48</a> sản phẩm
          </div>
        </div>
      </div>

      <div className="dropdown_content tws-hidden tws-absolute tws-bg-white tws-min-w-[400px] tws-min-h-[300px] tws-z-1 tws-right-0 tws-p-2.5">
        <Link className="link_product">
          <ProductModal />
        </Link>
        <Link className="link_product">
          <ProductModal />
        </Link>
        <Link className="link_product">
          <ProductModal />
        </Link>
        <Link className="link_product">
          <ProductModal />
        </Link>
        <div>
          <hr />
        </div>
        <div className="view_cart tws-flex tws-items-center tws-justify-between tws-my-5">
          <div className="text">23 sản phẩm được thêm</div>
          <div>
            <Link
              className="link_view tws-text-white tws-p-2.5 tws-no-underline tws-rounded-lg tws-font-normal tws-text-[15px]"
              to={link}
            >
              Xem giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
