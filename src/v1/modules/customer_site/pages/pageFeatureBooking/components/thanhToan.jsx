import React, { useState } from "react";
import {Link} from "react-router-dom";

import "./styles/featureBooking.scss";
import { Col, Row } from "antd";
import { BsFillTicketPerforatedFill, BsCurrencyDollar  } from "react-icons/bs";

import logo from "./assets/logo-amazing-tech-v2.png";
const ThanhToan = () => {
    const [pTTT, setPTTT] = useState(3);

    const handlePTTT = (index) => {
        setPTTT(index);
    }
   return (
      <>
        <div className="ThanhToan">
            <Row className="vocher">
                <Col span={12} className="shop-vocher">
                    <p><BsFillTicketPerforatedFill /> Shop Vocher</p>
                </Col>
                <Col span={12} className="choose-vocher">
                    <p>Chọn Vocher</p>
                </Col>
            </Row>
            <Row className="pay">
                <Col span={9} className="title-pay">
                    <p><BsCurrencyDollar /> Phương thức thanh toán</p>
                </Col>
                <Col span={5} className={"btn-pay" + (pTTT === 1 ? " ative" : "")}>
                    <button onClick={() => handlePTTT(1)}>Thanh toán khi nhận hàng</button>
                </Col>
                <Col span={5} className={"btn-pay" + (pTTT === 2 ? " ative" : "")}>
                    <button onClick={() => handlePTTT(2)}>Thẻ Tín Dụng / Ghi nợ</button>
                </Col>
                <Col span={5} className={"btn-pay" + (pTTT === 3 ? " ative" : "")}>
                    <button onClick={() => handlePTTT(3)}>Ví Amazing Pay</button>
                </Col>
            </Row>
            <Row  className="Vi-Pay">
                <Col span={3} className="logo-pay">
                    <img  src={logo} alt="logo-amazing-pay"/>
                </Col>
                <Col span={21}>
                    <h1>Ví Amazing Pay</h1>
                    <h2>Số dư trong tài khoản: <span>0đ</span></h2>
                    <button className="btn-napthem" onClick={() => handlePTTT(1)}>Nạp Thêm</button>
                </Col>

            </Row>
            <Row className="ThanhToan-pay">
                <Col span={14} className="price">
                    <p>Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo Điều Khoản của ShopAmazing</p>
                </Col>
                <Col span={10} className="btn-ThanhToan">
                    <button>Thanh Toán</button>
                </Col>
            </Row>


        </div>
      </>
   );
};

export default ThanhToan;
