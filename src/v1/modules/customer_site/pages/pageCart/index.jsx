import React, {useState} from "react";
import "./style.scss";

import {IoIosSearch} from "react-icons/io";
import {Col, Row} from "antd";

import CartItemProduct from "./components/cartItemProduct";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
import Logo from "./assets/icons/logo.png";

const Cart = () => {
   return (
      <>
         <div className='tws-max-w-[1440px]  tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <BreadcrumbComponent name={"Giỏ hàng"} />
            </div>
         </div>
         <div className='width_page'>
            <div className='cart_main'>
               <div className='container'>
                  <div className='cart_title tws-leading-[80px]'>
                     <div className='cart_search center tws-justify-between'>
                        <div className='image center'>
                           <img src={Logo} alt='' className='tws-w-[70px]' />
                           <p className='tws-pt-5 tws-pb-5 tws-pl-0.5 tws-pr-0.5 tws-my-0 tws-mx-5'></p>
                           <span className='tws-text-4xl tws-font-bold'>Giỏ hàng</span>
                        </div>
                        <div className=''>
                           <form action='' className='search-container center tws-overflow-hidden'>
                              <input
                                 type='text'
                                 placeholder='HÀNG HIỆU DEAL ĐỘC QUYỀN'
                                 name='search'
                                 className='tws-p-3 tws-w-[500px] tws-text-[17px] '
                              />
                              <button
                                 type='submit'
                                 className=' tws-text-white tws-p-3  tws-font-semibold  tws-border-none tws-cursor-pointer tws-rounded-r tws-flex tws-items-center tws-justify-center'>
                                 <IoIosSearch style={{fontSize: "24px"}} />
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className='cart_section tws-pt-8'>
                     <div className='cart_section_title cart_background'>
                        <div className='row'>
                           <Row className='tws-flex-nowrap tws-flex gap-5 tws-items-center'>
                              <Col className='gutter-row center' span={10}>
                                 <input className='input' type='checkbox' />
                                 <span>Sản phẩm</span>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div>Đơn giá</div>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div>Số lượng</div>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div>Số tiền</div>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div>Thao tác</div>
                              </Col>
                           </Row>
                        </div>
                     </div>
                     <div>
                        <CartItemProduct />
                        <CartItemProduct />
                     </div>
                     <div className='cart_section_pay cart_background ' style={{height: "60px", marginTop: "20px"}}>
                        <div className='row'>
                           <Row className='Row tws-items-center'>
                              <Col className='gutter-row1' span={10}>
                                 <div className='gutter-row center'>
                                    <input className='input' type='checkbox' />
                                    Chọn tất cả (0)
                                 </div>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div className='p2'>Xóa</div>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div className='p3 '>
                                    Tổng thanh toán <span>(0 sản phẩm)</span>
                                 </div>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div className='p4 tws-text-2xl tws-font-bold'>120,000đ</div>
                              </Col>
                              <Col className='gutter-row' span={10}>
                                 <div className='p5'>
                                    <button className='tws-border-none tws-text-[20px] tws-cursor-pointer tws-text-white tws-rounded '>
                                       Mua hàng
                                    </button>
                                 </div>
                              </Col>
                           </Row>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Cart;
