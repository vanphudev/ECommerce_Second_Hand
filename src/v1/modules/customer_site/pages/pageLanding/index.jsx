import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./component/CardItem"
import Button from "./component/Button"
import CardSupport from "./component/CardSupport"
import CardReview from "./component/CardReview"
import ImageReveal from "./component/ScrollReveal"
import "./style.scss";

import { IoWalletOutline } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Row, Col } from "antd";
import { Image } from 'antd';

import { IoStar } from "react-icons/io5";
import "../../../../styles/index.scss";

const Landing = () => {
  return (
    <>
      <div className="main">
        <div className="intro ">
          <div className="intro_Text tws-text-center" >
            <h1>MUA SẮM THẢ GA, KHÔNG LO GIÁ CẢ</h1>
            <p >Tận hưởng nào</p>
          </div>
          <ImageReveal />
          <div className="Icon Center">
            <p>&lt;</p>
          </div>
        </div>

        <div className="KhamPha container">
          <div className="KhamPha_Text">Khám phá ngay!</div>
          <div className="KhamPha_Card">
            <CardItem icon={TbTruckDelivery} title="Hỗ trợ vận chuyển" />
            <CardItem icon={MdOutlineSupportAgent} title="Hỗ trợ khách hàng" />
            <CardItem icon={AiOutlineLike} title="Gợi Ý Hôm Nay" />
            <CardItem icon={IoWalletOutline} title="Thanh toán an toàn" />
            <CardItem icon={IoChatbubbleEllipsesOutline} title="Tính năng 'Chat'" />
            <CardItem icon={MdOutlineSecurity} title="Tính đảm bảo" />
          </div>
        </div>
        <div className="DichVu ">
          <div className="container">
            <Row className="Row">
              <Col span={10} className="Col1">
                <div className="DichVu_Text">
                  <div className="Text1">Dịch vụ chuyên nghiệp</div>
                  <div className="Text2">Bạn có thể yên tâm lựa chọn mà không cần lo lắng điều gì </div>
                  <Button title="Xem ngay" />
                </div>
              </Col>
              <Col span={14} className="Col2 ">
                <div className="Image">
                  <div className="image_1">
                    <p>Kiểm tra <br />nghiêm</p>
                  </div>
                  <div className="image_2">
                    <p>Miễn phí<br /> vận chuyển</p>
                  </div>
                  <div className="image_3">
                    <p>Vận chuyển<br /> nhanh chóng</p>
                  </div>
                  <div className="image_4">
                    <p>Trao tận tay</p>
                  </div>
                  <div className="image_5">
                    <p>Giao hàng tận nơi</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

        </div>
        <div className="Feedback">
          <Row >
            <Col span={12} className="Feedback_Col1 Center">
              <Image className="feedback-image"
                width={300} height={400}
                src="src/v1/modules/customer_site/pages/pageLanding/assets/images/feedback.jpg"
              />
              <div className="Avatar">
                <img src="src/v1/modules/customer_site/pages/pageLanding/assets/images/avatar.jpg" alt="" />
              </div>
              <div className="Text">
                <p className="p1">Nguyễn Quân</p>
                <p className="p2">Lựa chọn hàng đầu của Quân</p>
              </div>
            </Col>
            <Col span={12} className="Feedback_Col2 Center">
              <div className="Feedback_Text">
                <p className="Text1">Mọi người đã thử</p>
                <p className="Text1">Còn bạn thì sao?</p>
                <p className="Text2">Khám phá ngay để lựa chọn cho mình hàng đẹp</p>
                <Button title="Xem ngay" className="btn_Feedback" />
              </div>

            </Col>
          </Row>
        </div>
        <div className="Support">
          <div className="support-container container">
            <h1>KÊNH HỖ TRỢ NHÀ BÁN HÀNG</h1>

            <div className="support-card">
              <CardSupport

                title="TRUNG TÂM HỖ TRỢ NHÀ BÁN"
                describe="Đội ngũ chăm sóc nhiệt tình, chu đáo luôn sẵn sàng hỗ trợ"
              />
              <CardSupport

                title="WEBSITE SHOP UNIVERSITY"
                describe="Thư viện kiến thức từ A-Z"
              />
              <CardSupport

                title="CỘNG ĐỒNG NHÀ BÁN HÀNG"
                describe="Nơi các nhà bán hàng giao lưu, chia sẻ, trao đổi kinh nghiệm"
              />
            </div>
          </div>
        </div>
        <div className="Review">
          <div className="Review-container container">
            <h1>NGƯỜI DÙNG NÓI GÌ VỀ SHOP</h1>

            <div className="Review-card">
              <CardReview
                icon={IoStar}
                title="Giao hàng rất nhanh, mua hàng rất tiện lợi. 
                Giá cả các sản phẩm rẻ hơn so với bên ngoài.
                Tốt nhất mọi người nên mua ở Shop để đảm bảo chất lượng"
                name="Nguyễn Ngọc Nhân"
                date="23/10/2024"
              />
              <CardReview
                icon={IoStar}
                title="Giao hàng rất nhanh, mua hàng rất tiện lợi. 
                Giá cả các sản phẩm rẻ hơn so với bên ngoài.
                Tốt nhất mọi người nên mua ở Shop để đảm bảo chất lượng"
                name="Nguyễn Ngọc Nhân"
                date="23/10/2024"
              />
              <div className="Icon Center">
                <p>&lt;</p>
              </div>
            </div>

          </div>
        </div>
        <div className="Register">
          <div className="">
            <p>Đăng ký ngay để biết thêm chi tiết</p>
            <Button title="Đăng ký" />
          </div>

        </div>

      </div>

    </>
  );
};

export default Landing;

