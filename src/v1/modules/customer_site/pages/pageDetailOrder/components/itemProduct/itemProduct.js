import React from "react";
import "./style.scss";
import { CiCircleAlert } from "react-icons/ci";
import logo from "../../assets/icons/logo.png";
import imgProduct from "../../assets/images/image_product.png";
import { Col, Row } from "antd";
const ItemProduct = () => {
  return (
    <>
      <div className=" tws-mt-[15px]">
        <div className="tws-flex tws-items-center tws-justify-between tws-p-[10px] tws-bg-light-purple-02">
          <div className="tws-flex tws-items-center tws-cursor-pointer">
            <img src={logo} alt="logo" className="tws-w-[30px]"></img>
            <p className="tws-font-medium tws-px-5">Amazing tech store</p>
            <p className="shop tws-bg-white tws-text-purple tws-text-[12px] tws-px-1 tws-cursor-pointer">
              Xem shop
            </p>
          </div>
          <div className="tws-text-[25px] tws-cursor-pointer">
            <CiCircleAlert />
          </div>
        </div>
        <div className="tws-p-[10px] ">
          <Row gutter={30} className="tws-flex tws-items-center">
            <Col span={4}>
              <img src={imgProduct} alt="imgProduct"></img>
            </Col>
            <Col span={12} className="tws-text-base">
              <p>
              Áo khoác Nam JULIDO Nam chất liệu gió hai lớp trượt nước cản gió cản bụi
              </p>
              <p className="tws-text-[14px] tws-text-dark-gray-01">Phân loại hàng: Màu xanh da trời</p>
              <p className="tws-text-[14px] tws-text-dark-gray-01 ">Số lượng: x3</p>
            </Col>
            <Col span={4}>
              <p className="tws-line-through tws-text-dark-gray-01 tws-text-[18px]">100.000 đ</p>
            </Col>
            <Col span={4}>
              <p className="tws-text-dark-orange tws-text-[20px] tws-font-medium">87.000 đ</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ItemProduct;
