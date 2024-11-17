import React, {useState} from "react";
import {Row, Col} from "antd";
import Sidebar from "./Sidebar";
import "../../styles//Categories.scss";

const ListProductFilter = () => {
   const [visible, setVisible] = useState(false);
   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };

   return (
      <div className='wrapper'>
         <div className='bodywrap'>
            <div className='content-wrapper'>
               <Row gutter={0}>
                  <Col xs={0} sm={0} md={7} lg={7} className='sidebar-column'>
                     <Sidebar />
                  </Col>
                  <Col xs={24} sm={24} md={17} lg={17} className='product-column'>
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
      </div>
   );
};

export default ListProductFilter;
