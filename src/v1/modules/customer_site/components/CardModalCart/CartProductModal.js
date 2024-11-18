import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";
import {Col, Row} from "antd";

import imgProductModal from "../../pages/pageCart/assets/images/image_product.png";
const ProductModal = () => {
   return (
      <>
         <div className='productmodal_item tws-py-2.5 tws-min-h-[60px]'>
            <Row gutter={20} className='row_main tws-text-black'>
               <Col span={4}>
                  <img src={imgProductModal} className='tws-w-[50px]'></img>
               </Col>
               <Col
                  span={15}
                  className='col2 tws-block tws-overflow-hidden tws-whitespace-nowrap tws-overflow-ellipsis tws-font-normal'>
                  Sữa Rửa Mặt Cetaphil Dịu Lành Cho Da Nhạy Cảm 250ml (Mới)
               </Col>
               <Col span={4} className='col3 tws-font-normal'>
                  đ144.000
               </Col>
            </Row>
         </div>
      </>
   );
};

export default ProductModal;
