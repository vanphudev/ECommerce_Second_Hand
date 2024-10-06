import React, {useState} from "react";
import {Row, Col, Card, Button, Drawer} from "antd"; // Import thêm Drawer
import {FilterOutlined} from "@ant-design/icons"; // Import icon Filter
import Sidebar from "./Sidebar"; // Import Sidebar đã có sẵn
import "./style/Categories.scss";
const {Meta} = Card;

const products = [
   {
      id: 1,
      name: "Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml",
      price: "85.000₫",
      comparePrice: "90.000₫",
      discount: "6%",
      image1: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/googleshoppingsuaruamatsimp.jpg?v=1670156989563",
      image2: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/211300007gelruamatdanhchod.jpg?v=1670156989563",
      link: "/sua-rua-mat-simple-giup-da-sach-thoang-150ml",
   },
   {
      id: 1,
      name: "Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml",
      price: "85.000₫",
      comparePrice: "90.000₫",
      discount: "6%",
      image1: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/googleshoppingsuaruamatsimp.jpg?v=1670156989563",
      image2: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/211300007gelruamatdanhchod.jpg?v=1670156989563",
      link: "/sua-rua-mat-simple-giup-da-sach-thoang-150ml",
   },
   {
      id: 1,
      name: "Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml",
      price: "85.000₫",
      comparePrice: "90.000₫",
      discount: "6%",
      image1: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/googleshoppingsuaruamatsimp.jpg?v=1670156989563",
      image2: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/211300007gelruamatdanhchod.jpg?v=1670156989563",
      link: "/sua-rua-mat-simple-giup-da-sach-thoang-150ml",
   },
   {
      id: 1,
      name: "Sữa Rửa Mặt Simple Giúp Da Sạch Thoáng 150ml",
      price: "85.000₫",
      comparePrice: "90.000₫",
      discount: "6%",
      image1: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/googleshoppingsuaruamatsimp.jpg?v=1670156989563",
      image2: "//bizweb.dktcdn.net/thumb/large/100/472/852/products/211300007gelruamatdanhchod.jpg?v=1670156989563",
      link: "/sua-rua-mat-simple-giup-da-sach-thoang-150ml",
   },
   // Bạn có thể thêm sản phẩm vào đây
];

const Categories = () => {
   const [visible, setVisible] = useState(false); // State để điều khiển Drawer (Sidebar)

   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };

   return (
      <div className='bodywrap'>
         <div className='layout-collection'>
            {/* Breadcrumb */}
            <section className='bread-crumb'>
               <div className='container'>
                  <ul className='breadcrumb'>
                     <li className='home'>
                        <a href='/'>
                           <span>Trang chủ</span>
                        </a>
                        <span className='mr_lr'>
                           &nbsp;
                           <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fas'
                              data-icon='chevron-right'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 320 512'
                              className='svg-inline--fa fa-chevron-right fa-w-10'
                              width='12'
                              height='12'>
                              <path
                                 fill='currentColor'
                                 d='M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z'
                              />
                           </svg>
                           &nbsp;
                        </span>
                     </li>
                     <li>
                        <strong>
                           <span>Chăm sóc da mặt</span>
                        </strong>
                     </li>
                  </ul>
               </div>
            </section>

            <Row gutter={16}>
               {/* Cột Sidebar */}
               <Col xs={0} sm={0} md={6} lg={6} className='sidebar-column'>
                  <Sidebar /> {/* Gọi lại Sidebar */}
               </Col>

               {/* Icon Filter cho màn hình nhỏ */}
               <Col xs={24} sm={24} md={0} lg={0} className='filter-icon'>
                  <Button icon={<FilterOutlined />} type='primary' onClick={showDrawer}>
                     Bộ lọc
                  </Button>
               </Col>

               {/* Drawer cho Sidebar */}
               <Drawer title='Bộ lọc sản phẩm' placement='left' onClose={onClose} visible={visible}>
                  <Sidebar />
               </Drawer>

               <Col xs={24} sm={24} md={15} lg={15} className='product-column'>
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

                     <div className='products-view products-view-grid list_hover_pro'>
                        <Row gutter={[8, 8]}>
                           {products.map((product, index) => (
                              <Col xs={12} sm={12} md={8} lg={6} key={`${product.id}-${index}`}>
                                 <div className='item_product_main'>
                                    <form
                                       action='/cart/add'
                                       method='post'
                                       className='variants product-action'
                                       enctype='multipart/form-data'>
                                       <div className='product-thumbnail'>
                                          <a
                                             className='image_thumb scale_hover'
                                             href={product.link}
                                             title={product.name}>
                                             <img src={product.image1} alt={product.name} />
                                          </a>
                                       </div>
                                       <div className='product-info'>
                                          <div className='price-box'>
                                             <span className='price'>{product.price}</span>
                                             <div className='compare'>
                                                <span className='compare-price'>{product.comparePrice}</span>
                                                <span className='smart'>-{product.discount}</span>
                                             </div>
                                          </div>
                                          <h3 className='product-name'>
                                             <a href={product.link} title={product.name}>
                                                {product.name}
                                             </a>
                                          </h3>
                                          <div className='action'>
                                             <Button className='btn-cart btn-views add_to_cart' type='primary'>
                                                Thêm vào giỏ
                                             </Button>
                                          </div>
                                       </div>
                                    </form>
                                 </div>
                              </Col>
                           ))}
                        </Row>
                     </div>
                  </div>
               </Col>
            </Row>
         </div>
      </div>
   );
};

export default Categories;
