import React, {useState} from "react";
import {Row, Col, Pagination} from "antd";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import Sidebar from "./Sidebar";
import "../../styles//Categories.scss";
import Card from "../../../../components/CardProduct/Card.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListProductFilter = () => {
   const [visible, setVisible] = useState(false);
   const showDrawer = () => {
      setVisible(true);
   };

   const onClose = () => {
      setVisible(false);
   };

   function SampleNextArrow(props) {
      const {className, style, onClick} = props;
      return (
         <div className={className} style={{display: "block", background: "#55018D"}} onClick={onClick}>
            <SlArrowRight
               style={{
                  fontSize: "20px",
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
               }}
            />
         </div>
      );
   }
   function SamplePrevArrow(props) {
      const {className, style, onClick} = props;
      return (
         <div className={className} style={{display: "block", background: "#55018D"}} onClick={onClick}>
            <SlArrowLeft
               style={{
                  fontSize: "20px",
                  color: "white",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
               }}
            />
         </div>
      );
   }
   var settings = {
      infinite: true,
      speed: 500,
      rows: 3,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };

   const cardCount = 50;
   const cardsPerPage = 10;
   const [currentPage, setCurrentPage] = useState(1);
   const startIndex = (currentPage - 1) * cardsPerPage;
   const endIndex = startIndex + cardsPerPage;

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
                     <Row>
                        <Col span={24} className='list-product'>
                           <Slider {...settings}>
                              {Array.from({length: cardCount})
                                 .slice(startIndex, endIndex)
                                 .map((_, index) => (
                                    <Card key={index} />
                                 ))}
                           </Slider>
                        </Col>
                     </Row>{" "}
                     <Pagination
                        align='center'
                        defaultCurrent={1}
                        total={cardCount}
                        pageSize={cardsPerPage}
                        onChange={(page) => setCurrentPage(page)} // Cập nhật trang hiện tại khi người dùng thay đổi trang
                     />
                  </Col>
               </Row>
            </div>
         </div>
      </div>
   );
};

export default ListProductFilter;
