import React from "react";
import "./style.scss";

const TotalPayment = () => {
  return (
    <table className="TotalPayment_main tws-mt-[15px] tws-w-full tws-border-collapse">
      <tbody>
        <tr>
          <td>Tổng tiền hàng</td>
          <td>310.000 đ</td>
        </tr>
        <tr>
          <td>Phí vận chuyển</td>
          <td>310.000 đ</td>
        </tr>
        <tr>
          <td>Giảm giá phí vận chuyển</td>
          <td>310.000 đ</td>
        </tr>
        <tr>
          <td>Thành tiền</td>
          <td className="tws-text-dark-orange tws-font-medium total">310.000 đ</td>
        </tr>
        <tr>
          <td>Phương thức Thanh toán</td>
          <td className="tws-font-medium">Thanh toán khi nhận hàng</td>
        </tr>
        <tr>
          <td colSpan="2">Vui lòng thanh toán <span className="tws-text-dark-orange">310.000 đ</span>  khi nhận hàng.</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TotalPayment;