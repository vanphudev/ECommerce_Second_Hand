import React, { useState } from "react";
import MenuDO from "./components/menu.js";
import Title from "./components/title.js";
import ButtonConfirm from "./components/button/buttonConfirm.js";
import Address from "./components/address/address.js";
import ItemProduct from "./components/itemProduct/itemProduct.js";
import OrderTracking from "./components/orderTracking/orderTracking.js";
import TotalPayment from "./components/table/totalPayment.js";
import { Col, Row } from 'antd';
const DetailOrder = () => {
    const [selectedOption, setSelectedOption] = useState(0);
    const [showBuyBack, setShowBuyBack] = useState(false);
    const [showEvaluate, setShowEvaluate] = useState(false);
    const handleOptionChange = (event) => {
        setSelectedOption(Number(event.target.value));
    };

    const handleConfirmClick = () => {
        if (selectedOption === 3) {
            alert("Cảm ơn bạn đã đặt hàng");
            setSelectedOption(4);
            setShowBuyBack(true);
            setShowEvaluate(true);
        }
    };

    return (
        <>
            <div className="width_page tws-block" >
                <div className="detailOrder_main">
                    <div className="container">
                        <Row gutter={0}>
                            <Col className="" span={6}>
                                <MenuDO />
                            </Col>
                            <Col span={18} className="col_2 tws-max-w-[840px]">
                                <div className="tws-flex tws-justify-between tws-text-2xl tws-font-medium">Đơn mua
                                    <div>
                                        <select onChange={handleOptionChange}>
                                            <option value={0}>đơn hàng đã đặt</option>
                                            <option value={1}>đã xác nhận thông tin đơn hàng</option>
                                            <option value={2}>giao hàng cho DVVC</option>
                                            <option value={3}>chờ giao hàng</option>
                                        </select>
                                    </div>
                                </div>
                                <hr></hr>
                                <div className="col_2_main tws-py-5">
                                    <Title />
                                    <OrderTracking selectedOption={selectedOption} style={{ marginTop: '90px' }} />
                                    <ButtonConfirm selectedOption={selectedOption} onConfirmClick={handleConfirmClick} showBuyBack={showBuyBack} showEvaluate={showEvaluate} />
                                    <Address selectedOption={selectedOption} />
                                    <div>
                                        <ItemProduct />
                                        <ItemProduct />
                                        <ItemProduct />
                                    </div>
                                    <TotalPayment />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailOrder;