import React from 'react';
import { Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../style/CategoryList.scss';
const { SubMenu } = Menu;

const CategoryList = () => {
    return (
        <div className="aside-content">
            <div className="title-head">
                Danh mục sản phẩm
            </div>
            <Menu mode="inline" className="nav-category">
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            Quy trình dưỡng da
                        </span>
                    }
                >
                    <Menu.Item key="1">Tẩy trang</Menu.Item>
                    <Menu.Item key="2">Mặt nạ rửa/tẩy da chết</Menu.Item>
                    <Menu.Item key="3">Nước hoa hồng</Menu.Item>
                    <Menu.Item key="4">Tinh chất</Menu.Item>
                    <Menu.Item key="5">Sữa dưỡng</Menu.Item>
                    <Menu.Item key="6">Dưỡng mắt</Menu.Item>
                    <Menu.Item key="7">Kem/gel/dầu dưỡng</Menu.Item>
                    <Menu.Item key="8">Xịt khoáng</Menu.Item>
                    <Menu.Item key="9">Chống nắng</Menu.Item>
                    <Menu.Item key="10">Mặt nạ miếng</Menu.Item>
                    <Menu.Item key="11">Mặt nạ ngủ</Menu.Item>
                </SubMenu>

                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            GIẢI PHÁP LÀN DA
                        </span>
                    }
                >
                    <Menu.Item key="12">Mụn đầu đen</Menu.Item>
                    <Menu.Item key="13">Mụn đỏ/kích ứng</Menu.Item>
                    <Menu.Item key="14">Dưỡng trắng/trị thâm</Menu.Item>
                    <Menu.Item key="15">Mờ nám da</Menu.Item>
                    <Menu.Item key="16">Cấp nước/kiểm soát dầu</Menu.Item>
                    <Menu.Item key="17">Tái tạo/chống lão hóa</Menu.Item>
                    <Menu.Item key="18">Dưỡng ẩm da thường</Menu.Item>
                    <Menu.Item key="19">Dưỡng ẩm sâu/tăng cường</Menu.Item>
                    <Menu.Item key="20">Trị rạn da</Menu.Item>
                    <Menu.Item key="21">Sản phẩm có chống nắng</Menu.Item>
                </SubMenu>

                <Menu.Item key="22">Bộ dưỡng</Menu.Item>
            </Menu>
        </div>
    );
};

export default CategoryList;
