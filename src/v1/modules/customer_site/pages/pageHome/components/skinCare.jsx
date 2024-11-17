import React from "react";
import "./styles/skinCare.scss";
import {Container} from "@mui/material";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Col, Row} from "antd";
import MenuTitle from "../../../components/MenuTitle/MenuTitle";
import Card from "../../../components//CardProduct/Card.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function skinCare() {
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
      rows: 2,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <div className='skin-care'>
         <Row>
            <Col span={24} className='title-skinCare'>
               <MenuTitle name={"SKINCARE"} />
            </Col>
            <Col span={7}>
               <img
                  src='https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/image_tab1.png?1710378441395'
                  alt='son-moi'
               />
               <div className='item-search'>
                  <button className='btn-search'>Kem Chống Nắng</button>
                  <button className='btn-search'>Tẩy Trang</button>
                  <button className='btn-search'>Toner</button>
                  <button className='btn-search'>Sữa rửa mặt</button>
               </div>
            </Col>
            <Col span={17}>
               <Row>
                  <Col span={24} className='option-skinCare'>
                     <button className='btn-active'>Sữa rửa mặt</button>
                     <button>Kem dưỡng</button>
                     <button>Mặt nạ</button>
                     <button>Kem chống nắng</button>
                     <button>Nước hoa hồng</button>
                  </Col>
               </Row>
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
            </Col>
         </Row>
      </div>
   );
}

export default skinCare;
