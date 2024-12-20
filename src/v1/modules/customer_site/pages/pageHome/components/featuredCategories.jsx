import React from "react";
import "./styles/featuredCategories.scss";
import {SlArrowLeft, SlArrowRight} from "react-icons/sl";
import {Container} from "@mui/material";
import {Col, Row} from "antd";
import MenuTitle from "../../../components/MenuTitle/MenuTitle";
import Card from "../../../components//CardProduct/Card.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const featuredCategories = () => {
   const data = [
      {
         id: 1,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_1.jpg?1710378441395",
         title: "Son môi",
      },
      {
         id: 2,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_2.jpg?1710378441395",
         title: "Tinh chất dưỡng",
      },
      {
         id: 3,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_3.jpg?1710378441395",
         title: "Mặt nạ",
      },
      {
         id: 4,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_4.jpg?1710378441395",
         title: "Kem dưỡng",
      },
      {
         id: 5,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_5.jpg?1710378441395",
         title: "Sữa rửa mặt",
      },
      {
         id: 6,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_6.jpg?1710378441395",
         title: "Nước Hoa Hồng",
      },
      {
         id: 7,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_7.jpg?1710378441395",
         title: "Mini zize",
      },
      {
         id: 8,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_8.jpg?1710378441395",
         title: "Tẩy da chết",
      },
      {
         id: 9,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_9.jpg?1710378441395",
         title: "Kem chống nắng",
      },
      {
         id: 10,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_10.jpg?1710378441395",
         title: "Dầu dưỡng",
      },
      {
         id: 11,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_11.jpg?1710378441395",
         title: "Kem trị mụn",
      },
      {
         id: 12,
         img: "https://bizweb.dktcdn.net/100/472/852/themes/888810/assets/danhmuc_12.jpg?1710378441395",
         title: "Kem trị thâm",
      },
   ];

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
      slidesToScroll: 4,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   };
   return (
      <div className='featured-categories'>
         <Row>
            <Col span={24}>
               <MenuTitle name={"SẢN PHẨM NỔI BẬC"} />
            </Col>
            {data.map((item) => (
               <Col span={4} className='fc-item'>
                  <div>
                     <img src={item.img} alt='realme-c25s' />
                     <p>{item.title}</p>
                  </div>
               </Col>
            ))}
         </Row>
         <Row className='event-day'>
            <Col span={6} className='left'>
               <div>
                  <h1>Giá Sốc⚡Hôm Nay</h1>
               </div>
            </Col>
            <Col span={10} className='between'>
               <div>
                  <p>Chương trình đã hết hạn</p>
               </div>
            </Col>
            <Col span={8} className='right'>
               <div>
                  <h3>XEM TẤT CẢ +</h3>
               </div>
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
               </Slider>
            </Col>
         </Row>
      </div>
   );
};

export default featuredCategories;
