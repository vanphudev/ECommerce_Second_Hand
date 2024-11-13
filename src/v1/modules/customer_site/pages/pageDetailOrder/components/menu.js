import React from 'react';
import "./style.scss";
import { Menu } from 'antd';

const Icon1 = () => <div className="icon_color tws-bg-forest-green"></div>;
const Icon2 = () => <div className="icon_color tws-bg-yellow"></div>;
const Icon3 = () => <div className="icon_color tws-bg-blue"></div>;
const Icon4 = () => <div className="icon_color tws-bg-pink"></div>;
const Icon5 = () => <div className="icon_color tws-bg-orange"></div>;
const Icon6 = () => <div className="icon_color tws-bg-red"></div>;

const items = [
  { key: '1', icon: <Icon1 />, label: 'Amazing Tech Pay' },
  { key: '2', icon: <Icon2 />, label: 'Thông tin tài khoản' },
  { key: '3', icon: <Icon3 />, label: 'Đơn mua' },
  { key: '4', icon: <Icon4 />, label: 'Địa chỉ nhận hàng' },
  { key: '5', icon: <Icon5 />, label: 'Đặt lại mật khẩu' },
  { key: '6', icon: <Icon6 />, label: 'Đăng xuất' },
];

const MenuDO = () => {
  return (
    <div className="menu_main tws-w-[260px] tws-h-[900px]">
      <Menu
        defaultSelectedKeys={['3']}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default MenuDO;