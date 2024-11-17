import React, { useState } from "react";
import { Menu, Modal } from "antd";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo-amazing-tech.png";
import "./styles/style.scss";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { ShoppingOutlined } from "@ant-design/icons";

const Icon1 = () => (
  <div className="icon_color tws-bg-forest-green tws-w-[32px]"></div>
);
const Icon2 = () => (
  <div className="icon_color tws-bg-yellow tws-w-[32px]"></div>
);
const Icon3 = () => <div className="icon_color tws-bg-blue tws-w-[32px]"></div>;
const Icon4 = () => <div className="icon_color tws-bg-pink tws-w-[32px]"></div>;
const Icon5 = () => (
  <div className="icon_color tws-bg-orange tws-w-[32px]"></div>
);
const Icon6 = () => <div className="icon_color tws-bg-red tws-w-[32px]"></div>;

const items = [
  {
    key: "1",
    icon: <img src={Logo} alt="" style={{ width: "32px" }} />,
    label: "Amazing Tech Pay",
    path: import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_PAYMENT,
  },
  {
    key: "2",
    icon: (
      <img src="https://futabus.vn/images/header/profile/Profile.svg" alt="" />
    ),
    label: "Thông tin tài khoản",
    path: import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_INFORMATION,
  },
  {
    key: "3",
    icon: (
      <span className="iconMenu1">
        <ShoppingCartOutlined />{" "}
      </span>
    ),
    label: "Đơn mua",
    path: import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_ORDER_MANAGER,
  },
  {
    key: "4",
    icon: (
      <span className="iconMenu2">
        <ShoppingOutlined />
      </span>
    ),
    label: "Đơn mua chi tiết",
    path: import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_DETAIL_ORDER,
  },
  {
    key: "5",
    icon: (
      <img src="https://futabus.vn/images/header/profile/Address.svg" alt="" />
    ),
    label: "Địa chỉ nhận hàng",
    path: import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_ADDRESS,
  },
  {
    key: "6",
    icon: (
      <img src="https://futabus.vn/images/header/profile/Password.svg" alt="" />
    ),
    label: "Đặt lại mật khẩu",
    path: import.meta.env
      .VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_RESET_PASSWORD,
  },
  {
    key: "7",
    icon: (
      <img src="https://futabus.vn/images/header/profile/Logout.svg" alt="" />
    ),
    label: "Đăng xuất",
    path: "",
  },
];

const MenuDO = () => {
  const location = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const selectedKey =
    items.find((item) => item.path === location.pathname)?.key || "1";
  const handleSelect = (key) => {
    if (key === "7") {
      setIsModalVisible(true);
    }
  };
  return (
    <div className="menu_main tws-w-[260px] tws-h-[900px]">
      <Menu
        style={{ backgroundColor: "transparent" }}
        defaultSelectedKeys={[selectedKey]}
        mode="inline"
        items={items.map((item) => ({
          ...item,
          label: (
            <Link to={item.path} onClick={() => handleSelect(item.key)}>
              {item.label}
            </Link>
          ),
        }))}
      />
      <Modal
        title="Thông báo"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Bạn đã chọn Đăng xuất. Bạn có chắc chắn muốn tiếp tục?</p>
      </Modal>
    </div>
  );
};

export default MenuDO;
