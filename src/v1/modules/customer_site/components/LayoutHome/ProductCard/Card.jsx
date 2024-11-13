import "../ProductCard/styles.scss"
import React from "react";
import product_img from '../assets/googleshoppingsuaruamatsimp.png'
import product_logo from '../assets/vendorimg_1.png'
import free_img from '../assets/free.png'
import love_logo from '../assets/love.svg'

const Card = () => {
  return (
    <div class="card-cpn">
      <div class="row-1">
        <img src={product_img} class="large-image" alt=""></img>
        <img src={product_logo} class="small-image" alt=""></img>
      </div>
      <div class="row-2">
        <div class="row-2-line-1">
          <a class="a1">85.000₫</a>
          <a class="a2">90.000₫</a>
        </div>
        <a class="row-2-line-2">-6%</a>
        <img src={free_img} class="free-image" alt=""></img>
      </div>
      <div class="row-3"><a>Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml ...</a></div>
      <div class="row-4">
        <a>#topsanpham</a>
        <a>#topsanpham</a>
        <a>#topsanpham</a>
      </div>
      <div class="row-5"><a>Đã bán 54.3k</a></div>
      <div class="row-6">
        <a>Thêm vào giỏ</a>
        <img src={love_logo} class="love" alt=""></img>
      </div>
    </div>
  );
}
export default Card