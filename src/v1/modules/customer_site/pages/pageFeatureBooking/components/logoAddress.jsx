import React from "react";
import {Link} from "react-router-dom";

import "./styles/featureBooking.scss";
import { AiOutlineRight } from "react-icons/ai";
import {FaAngleDoubleRight, FaMapMarkerAlt } from "react-icons/fa";

import logo from "./assets/logo-amazing-tech-v2.png";
import { Col, Row } from "antd";
const LogoAddress = () => {
   return (
      <>
        <div className="logo-address">
            <h3>Trang chủ <AiOutlineRight /> Đặt hàng - Thanh toán</h3>
            <Row className="logo-title">
                <Col span={2} className="logo">
                <img src={logo}></img>
                </Col>
                <Col span={22} className="title">
                    <h1>| Đặt Hàng</h1>
                </Col>
            </Row>
            <Row className="address">
                <Col span={22}>
                <h2><FaMapMarkerAlt /> Địa chỉ nhận hàng</h2>
                    <p className="name-phone">Nguyễn Văng Phú <FaAngleDoubleRight /> (+84) 035 234 3324</p>
                    <p>111/76/637, Nguyễn Thị Tú, Phường Bình Hưng Hòa B, Quận Bình Thạnh, TP.Hồ Chí Minh</p>
                </Col>
                <Col span={2} className="phone">
                    <p>Thay Đổi</p>
                </Col>
            </Row>
        </div>
      </>
   );
};

export default LogoAddress;
