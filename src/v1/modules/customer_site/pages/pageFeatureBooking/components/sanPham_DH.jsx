import React from "react";
import {Link} from "react-router-dom";

import "./styles/featureBooking.scss";
import { Col, Row } from "antd";
import { QuestionCircleFilled } from '@ant-design/icons';
const SanPham_DH = () => {
   return (
      <>
        <div className="sanPham-DH">
            <Row className="SP-Title">
                <Col span={9} className="title-sp">
                    <p>Sản Phẩm</p>
                </Col>
                <Col span={5} className="title">
                    <p>Đơn Giá</p>
                </Col>
                <Col span={5} className="title">
                    <p>Số Lượng</p>
                </Col>
                <Col span={5} className="title">
                    <p>Thành Tiền</p>
                </Col>
            </Row>
            <Row className="SP-Content">
                <Col span={2} className="content">
                    <img className="img-sp" src="data:image/jpeg;base64,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" alt="son-moi"/>
                </Col>
                <Col span={4} className="content">
                    <p>Quần ống rộng dáng suông unisex hai sọc</p>
                    <p className="doi-tra">Đổi miễn phí 15 ngày</p>
                    <img className="img-sk" src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m0lhdiigcpe74b"></img>
                </Col>
                <Col span={3} className="content-phanloai">
                    <p>Phân Loại Hàng:</p>
                    <p>Xám Trắng, XL</p>
                </Col>
                <Col span={5} className="content-gia">
                    <p><span className="gia-cu"><s>đ300.000</s></span> <span className="gia-giam">đ200.000</span></p>
                </Col>
                <Col span={5} className="content-sl">
                    <p>1</p>
                </Col>
                <Col span={5} className="content-gia">
                    <p>đ200.000</p>
                </Col>
            </Row>
            <Row className="SP-Content">
                <Col span={2} className="content">
                    <img className="img-sp" src="data:image/jpeg;base64,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" alt="son-moi"/>
                </Col>
                <Col span={4} className="content">
                    <p>Quần ống rộng dáng suông unisex hai sọc</p>
                    <p className="doi-tra">Đổi miễn phí 15 ngày</p>
                    <img className="img-sk" src="https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m0lhdiigcpe74b"></img>
                </Col>
                <Col span={3} className="content-phanloai">
                    <p>Phân Loại Hàng:</p>
                    <p>Xám Trắng, XL</p>
                </Col>
                <Col span={5} className="content-gia">
                    <p><span className="gia-cu"><s>đ300.000</s></span> <span className="gia-giam">đ200.000</span></p>
                </Col>
                <Col span={5} className="content-sl">
                    <p>1</p>
                </Col>
                <Col span={5} className="content-gia">
                    <p>đ200.000</p>
                </Col>
            </Row>
            <Row className="tong-sp">
                <Col span={2} className="loi-nhan-text">
                <p>Lời nhắn:</p>
                </Col>
                <Col span={5} className="loi-nhan-input">
                <textarea placeholder="lưu ý cho người bán"></textarea>
                </Col>
                <Col span={17}>
                    <Row>
                        <Col span={6} className="option">
                            <p>Đơn vị vận chuyển:</p>
                        </Col>
                        <Col span={6} className="option">
                            <p>Nhanh</p>
                        </Col>
                        <Col span={6} className="option thaydoi">
                            <p>Thay đổi</p>
                        </Col>
                        <Col span={6} className="option">
                            <p>đ45.000</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className="option-dk">
                            <p>Được đồng kiểm <QuestionCircleFilled /></p>
                        </Col>
                    </Row>
                        
                </Col>
            </Row>
            <Row>
                <Col span={18} className="text-tong">
                    <p>Tổng Thanh Toán <span>(2 Sản Phẩm)</span>:</p>
                </Col>
                <Col span={6} className="number-tong">
                    <p>400.000 đ</p>
                </Col>
            </Row>
        </div>
      </>
   );
};

export default SanPham_DH;
