import React from "react";
import {Link} from "react-router-dom";
import "./styles/orderManager.scss";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import ItemOrder from "./itemOrder";
const OrderManager = () => {
   const [active, setActive] = React.useState(0);
   
   const data = [
      {
         id: 1,
         image: "https://s3-alpha-sig.figma.com/img/8e4f/8112/2b0eec3cd0bc73e14e2817123cfe7064?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSpBB89z~Cky1i64393~MmDKgHat75CmV5f5V4A1MYfTN7cMTeMyr31m-QDujMIGX20oxEYb1xDlQ8rfAE9Ps2WqDudgvk2M3MlKNVI3xGSqTXZT2dbnDH1jrvhGyCDTOebOMZlzxUIZR-FsGgsKkU5cC-Ay7JC~--3G4T47PLAgyR90IZJ4MvGGtl37A-RN52UTlPwF7Uf03t-zRHPHmJzXGZq4f9gAlKxNEi0arfg8wts-nm-2DmDSYxd6OZuFnakxYBXs26B9SCHDjE2tPOOr8DHEtIH0ad--UMRx8AWR3xt131zE9JcTHa6io5bdumQ8mhFHzBHBfq7xpmCPhA__",
         name: "Điện thoại",
         type: "Màu xanh da trời",
         priceOld: 100000,
         price: 87000,
         quantity: 3,
         status: "Chờ giao hàng",
         statusDetail: "Đơn hàng đã rời kho phân loại",
      },
   {
      id: 2,
      image: "https://s3-alpha-sig.figma.com/img/8e4f/8112/2b0eec3cd0bc73e14e2817123cfe7064?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSpBB89z~Cky1i64393~MmDKgHat75CmV5f5V4A1MYfTN7cMTeMyr31m-QDujMIGX20oxEYb1xDlQ8rfAE9Ps2WqDudgvk2M3MlKNVI3xGSqTXZT2dbnDH1jrvhGyCDTOebOMZlzxUIZR-FsGgsKkU5cC-Ay7JC~--3G4T47PLAgyR90IZJ4MvGGtl37A-RN52UTlPwF7Uf03t-zRHPHmJzXGZq4f9gAlKxNEi0arfg8wts-nm-2DmDSYxd6OZuFnakxYBXs26B9SCHDjE2tPOOr8DHEtIH0ad--UMRx8AWR3xt131zE9JcTHa6io5bdumQ8mhFHzBHBfq7xpmCPhA__",
      name: "Laptop",
      type: "Màu đen",
      priceOld: 200000,
      price: 180000,
      quantity: 1,
      status: "Chờ thanh toán",
      statusDetail: "Đơn hàng đang chờ thanh toán",
   },
   {
      id: 3,
      image: "https://s3-alpha-sig.figma.com/img/8e4f/8112/2b0eec3cd0bc73e14e2817123cfe7064?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSpBB89z~Cky1i64393~MmDKgHat75CmV5f5V4A1MYfTN7cMTeMyr31m-QDujMIGX20oxEYb1xDlQ8rfAE9Ps2WqDudgvk2M3MlKNVI3xGSqTXZT2dbnDH1jrvhGyCDTOebOMZlzxUIZR-FsGgsKkU5cC-Ay7JC~--3G4T47PLAgyR90IZJ4MvGGtl37A-RN52UTlPwF7Uf03t-zRHPHmJzXGZq4f9gAlKxNEi0arfg8wts-nm-2DmDSYxd6OZuFnakxYBXs26B9SCHDjE2tPOOr8DHEtIH0ad--UMRx8AWR3xt131zE9JcTHa6io5bdumQ8mhFHzBHBfq7xpmCPhA__",
      name: "Tai nghe",
      type: "Màu trắng",
      priceOld: 50000,
      price: 45000,
      quantity: 2,
      status: "Vận chuyển",
      statusDetail: "Đơn hàng đang được vận chuyển",
   },
   {
      id: 4,
      image: "https://s3-alpha-sig.figma.com/img/8e4f/8112/2b0eec3cd0bc73e14e2817123cfe7064?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GSpBB89z~Cky1i64393~MmDKgHat75CmV5f5V4A1MYfTN7cMTeMyr31m-QDujMIGX20oxEYb1xDlQ8rfAE9Ps2WqDudgvk2M3MlKNVI3xGSqTXZT2dbnDH1jrvhGyCDTOebOMZlzxUIZR-FsGgsKkU5cC-Ay7JC~--3G4T47PLAgyR90IZJ4MvGGtl37A-RN52UTlPwF7Uf03t-zRHPHmJzXGZq4f9gAlKxNEi0arfg8wts-nm-2DmDSYxd6OZuFnakxYBXs26B9SCHDjE2tPOOr8DHEtIH0ad--UMRx8AWR3xt131zE9JcTHa6io5bdumQ8mhFHzBHBfq7xpmCPhA__",
      name: "Máy tính bảng",
      type: "Màu xám",
      priceOld: 150000,
      price: 135000,
      quantity: 1,
      status: "Hoàn tất",
      statusDetail: "Đơn hàng đã hoàn tất",
   }
   ];
   return (
      <div className="OrderManager">
            <h3 className="Link"><Link to="/">Trang Chủ</Link> <RightOutlined /> 
            <Link to="/gio-hang">Tài Khoản</Link> <RightOutlined/> 
            <Link to="/order-manager">Đơn Mua</Link></h3>

            <div className="TabOrderManager">
               <div span={6} className="Tab">
                  <h3><div/>  Amazing Tech Pay</h3>
                  <h3><div/>  Thông tin tài khoản</h3>
                  <h3 className="active"><div/>  Đơn Mua</h3>
                  <h3><div/>  Địa chỉ nhận hàng</h3>
                  <h3><div/>  Đặt lại mật khẩu</h3>
                  <h3><div/>  Đăng xuất</h3>
                  
               </div>
               <div span={18} className="Content">

                  <Row>
                     <Col span={24} className="titleOrder">
                        <h2><p>Đơn Mua</p></h2>
                     </Col>
                  </Row>
                  <Row className="TabTrangThai">
                     <Col span={4} >
                        <p className={active == 0 && "active"} onClick={() => setActive(0)}>Tất Cả</p>
                     </Col>
                     <Col span={4}>
                        <p className={active == 1 && "active"} onClick={() => setActive(1)}>Chờ thanh toán</p>
                     </Col>
                     <Col span={4}>
                        <p className={active == 2 && "active"} onClick={() => setActive(2)}>Vận chuyển</p>
                     </Col>
                     <Col span={4}>
                        <p className={active == 3 && "active"} onClick={() => setActive(3)}>Chờ giao hàng</p>
                     </Col>
                     <Col span={4}>
                        <p className={active == 4 && "active"} onClick={() => setActive(4)}>Hoàn tất</p>
                     </Col>
                     <Col span={4}>
                        <p className={active == 5 && "active"} onClick={() => setActive(5)}>Đã hủy</p>
                     </Col>
                  </Row>
                  <Row >
                     <Col span={24} className="Search">
                        <SearchOutlined />
                        <input type="text" placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm" className="input-search"/>
                     </Col>
                  </Row>
                  <Row className="ListOrder">
                     {data.map((item) => (
                        <Row>
                           <ItemOrder data={item}/>
                        </Row>
                     ))}
                  </Row>

                              
               </div>
            </div>
      </div>
   );
};

export default OrderManager;
