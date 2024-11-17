import React from "react";
import {Link} from "react-router-dom";

import "./styles/featureBooking.scss";
import { Col, Row } from "antd";
const QuangCaoSP = () => {
   return (
      <>
      <div className="qc-sp">
            <Row className="coTheBanThich">
                <Col span={24}>
                    <span>BẠN CŨNG CÓ THỂ THÍCH</span><hr/>   
                </Col>
            </Row>
            <Row className="coTheBanThich">
                <Col span={24}>
                    <span>SẢN PHẨM ĐÃ XEM</span><hr/>   
                </Col>
            </Row>
  </div>
      </>
   );
};

export default QuangCaoSP;
