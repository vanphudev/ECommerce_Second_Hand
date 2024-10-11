import React, { useState } from "react";
import { Row, Col, Card, Button, Drawer } from "antd"; // Import thêm Drawer
import { FilterOutlined } from "@ant-design/icons"; // Import icon Filter
import Sidebar from "./Sidebar"; // Import Sidebar đã có sẵn
import "../style/Categories.scss";
const { Meta } = Card;



const Categories = () => {
    const [visible, setVisible] = useState(false); // State để điều khiển Drawer (Sidebar)

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <div className="wrapper">
            <div className='bodywrap'>
                {/* Thêm lớp content-wrapper bọc lấy sidebar và product column */}
                <div className='content-wrapper'>
                    <Row gutter={0}>
                        {/* Cột Sidebar */}
                        <Col xs={0} sm={0} md={8} lg={8} className='sidebar-column'>
                            <Sidebar /> {/* Gọi lại Sidebar */}
                        </Col>

                        {/* Icon Filter cho màn hình nhỏ */}
                        {/* <Col xs={24} sm={24} md={18} lg={18} className='filter-icon'>
                     <Button icon={<FilterOutlined />} type='primary' onClick={showDrawer}>
                        Bộ lọc
                     </Button>
                  </Col> */}

                        {/* Drawer cho Sidebar */}
                        {/* <Drawer title='Bộ lọc sản phẩm' placement='left' onClose={onClose} visible={visible}>
                     <Sidebar />
                  </Drawer> */}

                        {/* Cột Product */}
                        <Col xs={24} sm={24} md={16} lg={16} className='product-column'>
                            <h1 className='title-page'>
                                <span>Chăm sóc da mặt</span>
                            </h1>
                            <div className='category-products'>
                                <div className='sort-cate clearfix margin-bottom-10 hidden-xs'>
                                    <div className='sort-cate-left hidden-xs'>
                                        <h3>Xếp theo:</h3>
                                        <ul>
                                            <li className='btn-quick-sort alpha-asc'>
                                                <a href='#' onClick={() => console.log("Sort by A-Z")} title='Tên A-Z'>
                                                    Tên A-Z
                                                </a>
                                            </li>
                                            <li className='btn-quick-sort alpha-desc'>
                                                <a href='#' onClick={() => console.log("Sort by Z-A")} title='Tên Z-A'>
                                                    Tên Z-A
                                                </a>
                                            </li>
                                            <li className='btn-quick-sort position-desc'>
                                                <a href='#' onClick={() => console.log("Sort by newest")} title='Hàng mới'>
                                                    Hàng mới
                                                </a>
                                            </li>
                                            <li className='btn-quick-sort price-asc'>
                                                <a
                                                    href='#'
                                                    onClick={() => console.log("Sort by low to high")}
                                                    title='Giá thấp đến cao'>
                                                    Giá thấp đến cao
                                                </a>
                                            </li>
                                            <li className='btn-quick-sort price-desc'>
                                                <a
                                                    href='#'
                                                    onClick={() => console.log("Sort by high to low")}
                                                    title='Giá cao xuống thấp'>
                                                    Giá cao xuống thấp
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div >
    );

};

export default Categories;
