import React from "react";
import MenuTitle from "../../../../components/MenuTitle/MenuTitle.jsx";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import "../../styles/listProducts.scss";
import {Row, Col} from "antd";
import Card from "../../../../components/CardProduct/Card.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ListPrpductCate = () => {
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
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <>
         <div className='list-products tws-flex tws-flex-col tws-gap-3 tws-m-auto tws-mb-10'>
            <MenuTitle name={"SẢN PHẨM BÁN CHẠY"} />
            <Row>
               <Col span={24} className='list-product'>
                  <Slider {...settings}>
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                     <Card />
                  </Slider>
               </Col>
            </Row>
         </div>
      </>
   );
};

export default ListPrpductCate;
