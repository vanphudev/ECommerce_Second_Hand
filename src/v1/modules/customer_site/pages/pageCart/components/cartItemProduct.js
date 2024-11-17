import React ,{ useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { Col, Row } from "antd";
import { FaPlus,FaMinus } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import imgProduct from "../assets/images/image_product.png";
import imgVoucher from "../assets/images/voucher.png";

import { message } from "antd";

const CartItemProduct = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if(quantity===10){
      alert("Bạn chỉ có thể thêm tối đa 10 sản phẩm!");
    }else{
      setQuantity(prev => prev + 1);
    }
    
  };

  const handleReduced = () => {
    if(quantity===0){
      alert("Xóa sản phẩm khỏi giỏ hàng!");
    }else{
      setQuantity(prev => prev - 1);
    }
  };

  const hanleDelete=()=>{
    alert("Xóa sản phẩm khỏi giỏ hàng!");
  }
  return (
    <>
      <div className="cart_section_product">
        <div className="cart_section_product_item  tws-mt-5 tws-border  tws-rounded-lg tws-h-64 tws-py-4">
          <div className="item tws-mx-auto tws-h-55 tws-px-5">
            <div className="checkbox tws-flex tws-items-center tws-text-xs">
              <input type="checkbox" className="input" />
              <p className="p1 tws-mx-5 tws-px-2 tws-py-0.5 ">Yêu Thích +</p>
              <p className="p2">Tiny Clothes</p>
            </div>
            <div className="deal center tws-h-[45px] tws-text-[12px] tws-rounded-[5px] tws-my-2.5 tws-bg-[#bc80fc59]">
              <p className="p1 tws-py-0 tws-px-[3px] tws-ml-[10px]">Deal sốc</p>
              <p className="p2 tws-pl-5">Mua kèm deal độc quyền</p>
            </div>
            <div>
              <Row gutter={5}>
                <Col className="gutter-row1 center" span={10}>
                  <Col span={6}>
                    <img className="image center " src={imgProduct} alt="" />
                  </Col>
                  <Col span={12} className="name">
                    <p className="text tws-text-[15px]">
                      Quần ống rộng dáng suông unisex hai sọc mới nhất
                    </p>
                    <p className="p1 tws-text-center tws-w-[150px] tws-my-2.5">
                      Đổi miễn phí 15 ngày
                    </p>
                    <p className="img_voucher">
                      <img className="tws-w-full " src={imgVoucher} alt="" />
                    </p>
                  </Col>
                  <Col span={6} className="size center tws-justify-between">
                    <div>
                      <p>Phân loại hàng</p>
                      <p>Xám trắng, XL</p>
                    </div>
                    <div>
                      <FaCaretDown />
                    </div>
                  </Col>
                </Col>
                <Col className="gutter-row2 center tws-justify-evenly" span={5}>
                  <p className="price_p1 tws-text-[12px] tws-text-gray">
                    <s>đ199,000</s>
                  </p>
                  <p className="price_p2">đ90,000</p>
                </Col>
                <Col className="gutter-row3 center tws-justify-evenly" span={3}>
                  <button onClick={handleReduced}>
                    <FaMinus />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    className=" tws-rounded-[2px] tws-text-center tws-text-sm tws-w-[50px] tws-h-[30px] tws-cursor-text"
                  />
                  <button onClick={handleIncrease}>
                    <FaPlus />
                  </button>
                </Col>
                <Col className="gutter-row center j_center" span={4}>
                  <p className="price_p2">đ90,000</p>
                </Col>
                <Col className="gutter-row5 center j_center tws-text-[30px] tws-cursor-pointer" span={2}>
                  <MdDeleteForever onClick={hanleDelete}/>
                </Col>
              </Row>
            </div>
            <div className="text_voucher center tws-font-normal tws-text-[11px] tws-w-[270px] tws-justify-between tws-py-3 tws-px-5">
              <p>Voucher giảm đến 10k</p>
              <Link className="link_voucher tws-text-[#57bcf9]  tws-no-underline">
                Xem thêm voucher
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItemProduct;
