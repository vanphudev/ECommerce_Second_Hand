import React, { useState } from "react";
import { Col, Row } from "antd";
import { getItem } from "../items/item";
import "./style.scss"
const Address = ({ selectedOption }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const items = getItem(selectedOption)
    .filter((item, index) => index !== 4)
    .filter((item, index) => index <= selectedOption)
    .reverse();

  const check = (item, index) => {
    const reIndex = items.length - index - 1;
    if (reIndex === 0) {
      return "Đơn hàng đã được đặt";
    } else if (item.status === "pending" || item.status === "finish") {
      if (reIndex === 1) {
        return "Người gửi đang chuẩn bị hàng";
      } else if (reIndex === 2) {
        return (
          <>
            Đơn vị vận chuyển lấy hàng thành công.
            <br />
            Đơn hàng sẽ sớm được giao, vui lòng chú ý điện thoại.
          </>
        );
      } else {
        return "Giao hàng thành công";
      }
    }
  };

  return (
    <>
      <div className="Address_main border">
        <Row gutter={30}>
          <Col span={8} className="tws-leading-10">
            <div className="tws-text-lg">Địa chỉ nhận hàng</div>
            <div className="tws-text-dark-gray-01">
              <p>Nguyễn Văn Phú</p>
              <p>(+84) 377985402</p>
              <p className="tws-leading-6">
                302/1/19, Đường Nguyễn Thị Tú, Phường Bình Hưng Hòa B, Quận Bình
                Tân, TP. Hồ Chí Minh
              </p>
            </div>
          </Col>
          <Col span={16} className="tws-leading-10">
            <div className={`content ${isExpanded ? "expanded" : "compacted"}`}>
              {items.map((item, index) => (
                <Row
                  key={index}
                  gutter={20}
                  className={`col_row tws-pl-[10px] tws-leading-6 ${
                    item.status === "finish"  ? "completed" : "finish"
                  }`}
                >
                  <Col className="icon tws-flex tws-items-center tws-justify-center tws-bg-teal tws-text-white tws-w-[30px] tws-h-[30px] tws-rounded-full">{item.icon}</Col>
                  <Col>{item.date || "Chưa có ngày"}</Col>
                  <Col className="">
                    <p className="tws-font-medium">{item.text}</p>
                    <p>{check(item, index)}</p>
                  </Col>
                </Row>
              ))}
            </div>
            <button
              onClick={toggleExpand}
              className="toggle-btn tws-border-none tws-cursor-pointer tws-font-semibold"
            >
              {isExpanded ? "Thu gọn" : "Xem thêm"}
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Address;
