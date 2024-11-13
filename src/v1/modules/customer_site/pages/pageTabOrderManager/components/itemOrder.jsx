import { Col, Row } from "antd";
import React from "react";
import "./styles/itemOrder.scss";
import { LayoutOutlined } from "@ant-design/icons";

import logo from "./assets/logo-amazing-tech-v2.png";

const ItemOrder = ({ data }) => {

    const formatCurrency = (amount) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };
    const oldPriceFormatted = formatCurrency(data.priceOld);
    const priceFormatted = formatCurrency(data.price);

    const totalPrice = data.price * data.quantity;
    const totalPriceFormatted = formatCurrency(totalPrice);

    return (
        <>
            <Row className="ItemOrder">
                <Col span={24} className="ItemOrder__Name">
                    <Row className="Title-item">
                        <Col className="left" span={9}>
                            <img src={logo} alt="" className="logo"/>
                            <span className="Shop-Name">Amazing tech store</span>
                            <span className="Xem-Shop"><LayoutOutlined /> Xem Shop</span>
                        </Col>
                        <Col className="between"span={9}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M13.3333 2.5H0.833252V13.3333H13.3333V2.5Z" stroke="#26AA99" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.3333 6.6665H16.6666L19.1666 9.1665V13.3332H13.3333V6.6665Z" stroke="#26AA99" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.58333 17.5002C5.73393 17.5002 6.66667 16.5674 6.66667 15.4168C6.66667 14.2662 5.73393 13.3335 4.58333 13.3335C3.43274 13.3335 2.5 14.2662 2.5 15.4168C2.5 16.5674 3.43274 17.5002 4.58333 17.5002Z" stroke="#26AA99" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.4166 17.5002C16.5672 17.5002 17.4999 16.5674 17.4999 15.4168C17.4999 14.2662 16.5672 13.3335 15.4166 13.3335C14.266 13.3335 13.3333 14.2662 13.3333 15.4168C13.3333 16.5674 14.266 17.5002 15.4166 17.5002Z" stroke="#26AA99" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="Status-detail">{data.statusDetail}</span>
                        </Col>
                        <Col className="right" span={6}>
                            <span className="Status">{data.status}</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={24} className="ItemOrder_Image">
                    <Row>   
                        <Col span={4} className="img-item">
                            <img src={data.image} alt="" />
                        </Col>
                        <Col span={15} className="ItemOrder_Detail">
                            <h4>
                                {data.name}
                            </h4>
                            <p>
                                Phân loại hàng: {data.type}
                            </p><br/>
                            <p>
                                Số lượng: x{data.quantity}
                            </p>
                        </Col>
                        <Col span={5} className="ItemOrder_Price">
                            <h3><del>{oldPriceFormatted}</del></h3>
                            <h2>{priceFormatted}</h2>
                        </Col>
                    </Row>
                </Col>
            </Row>
                    <Row className="ItemOrder_Total">
                        <Col span={24}>
                            <h3>Thành Tiền: <span>{totalPriceFormatted}</span></h3>
                        </Col>
                        <Col span={24}>
                            <button className="btn_Nhan_Hang">
                                Đã nhận được hàng
                            </button>
                            <button>
                                Liên hệ người bán
                            </button>
                        </Col>
                    </Row>

        </>
    );
};

export default ItemOrder;