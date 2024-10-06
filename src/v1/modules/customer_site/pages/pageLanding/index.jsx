import React from "react";
import {Link} from "react-router-dom";
import CardItem from "./components/CardItem";
import Button from "./components/Button";
import CardSupport from "./components/CardSupport";
import CardReview from "./components/CardReview";
import ImageReveal from "./components/ScrollReveal";
import "./style.scss";

import {IoWalletOutline} from "react-icons/io5";
import {AiOutlineLike} from "react-icons/ai";
import {TbTruckDelivery} from "react-icons/tb";
import {MdOutlineSecurity} from "react-icons/md";
import {IoChatbubbleEllipsesOutline} from "react-icons/io5";
import {MdOutlineSupportAgent} from "react-icons/md";
import {Row, Col} from "antd";
import {Image} from "antd";

import {IoStar} from "react-icons/io5";
import "../../../../styles/index.scss";

const Landing = () => {
   return (
      <>
         <div className='main tws-mt-20'>
            <div className='intro tws-w-full tws-h-[620px]'>
               <div className='intro_Text tws-text-center '>
                  <h1 className='tws-text-5xl tws-font-bold'>MUA SẮM THẢ GA, KHÔNG LO GIÁ CẢ</h1>
                  <p className='tws-text-4xl tws-pt-[30px]'>Tận hưởng nào</p>
               </div>
               <ImageReveal />
               <div className='Icon Center'>
                  <p>&lt;</p>
               </div>
            </div>

            <div className='KhamPha container tws-w-full tws-h-[700px]'>
               <div className='KhamPha_content'>
                  <div className='KhamPha_Text tws-text-center tws-text-3xl '>Khám phá ngay!</div>
                  <div className='KhamPha_Card tws-flex tws-flex-wrap tws-justify-between'>
                     <CardItem icon={TbTruckDelivery} title='Hỗ trợ vận chuyển' />
                     <CardItem icon={MdOutlineSupportAgent} title='Hỗ trợ khách hàng' />
                     <CardItem icon={AiOutlineLike} title='Gợi Ý Hôm Nay' />
                     <CardItem icon={IoWalletOutline} title='Thanh toán an toàn' />
                     <CardItem icon={IoChatbubbleEllipsesOutline} title="Tính năng 'Chat'" />
                     <CardItem icon={MdOutlineSecurity} title='Tính đảm bảo' />
                  </div>
               </div>
            </div>

            <div className='DichVu tws-w-full'>
               <div className='container'>
                  <Row className='Row '>
                     <Col span={10} className='Col1 tws-m-auto tws-text-center tws-w-full '>
                        <div className='DichVu_Text'>
                           <div className='Text1'>Dịch vụ chuyên nghiệp</div>
                           <div className='Text2'>Bạn có thể yên tâm lựa chọn mà không cần lo lắng điều gì </div>
                           <Button title='Xem ngay' />
                        </div>
                     </Col>
                     <Col span={14} className='Col2 '>
                        <div className='Image'>
                           <div className='image_1 tws-w-[360px] tws-h-[360px]'>
                              <p className='tws-absolute tws-top-[17%] tws-left-[9%] tws-text-center'>
                                 Kiểm tra <br />
                                 nghiêm
                              </p>
                           </div>
                           <div className='image_2 tws-absolute tws-top-0 tws-left-[61%] tws-w-[260px] tws-h-[190px]'>
                              <p className='tws-absolute tws-top-[60%] tws-left-[10%] tws-text-[25px]'>
                                 Miễn phí
                                 <br /> vận chuyển
                              </p>
                           </div>
                           <div className='image_3 tws-absolute tws-top-[35%] tws-left-[56%] tws-w-[160px] tws-h-[150px]'>
                              <p className='tws-absolute tws-top-[65%] tws-left-[10%] tws-text-[18px]'>
                                 Vận chuyển
                                 <br /> nhanh chóng
                              </p>
                           </div>
                           <div className='image_4 tws-absolute tws-top-[58%] tws-left-[6%] tws-w-[235px] tws-h-[230px]'>
                              <p className='tws-absolute tws-top-[45%] tws-left-[18%] tws-text-[30px]'>Trao tận tay</p>
                           </div>
                           <div className='image_5 tws-absolute tws-top-[63%] tws-left-[45%] tws-w-[370px] tws-h-[230px]'>
                              <p className='tws-absolute tws-top-[80%] tws-left-[10%] tws-text-[30px]'>
                                 Giao hàng tận nơi
                              </p>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </div>
            </div>
            <div className='Feedback tws-w-full'>
               <Row>
                  <Col span={12} className='Feedback_Col1 Center tws-h-[700px]  tws-w-full'>
                     <Image
                        className='feedback-image tws-rounded-[30px] tws-max-w-full'
                        width={300}
                        height={400}
                        src='src/v1/modules/customer_site/pages/pageLanding/assets/images/feedback.jpg'
                     />
                     <div className='Avatar tws-absolute tws-bottom-[12%] tws-left-[22%]'>
                        <img
                           className='tws-w-[120px] tws-h-[120px] tws-rounded-full tws-border tws-border-white'
                           src='src/v1/modules/customer_site/pages/pageLanding/assets/images/avatar.jpg'
                           alt=''
                        />
                     </div>
                     <div className='Text tws-absolute tws-bottom-[8%] tws-left-[40%] tws-text-white tws-leading-[40px]'>
                        <p className='tws-text-[30px] tws-font-semibold'>Nguyễn Quân</p>
                        <p className='tws-text-[18px]'>Lựa chọn hàng đầu của Quân</p>
                     </div>
                  </Col>
                  <Col span={12} className='Feedback_Col2 Center tws-flex-none tws-text-center tws-p-[20px]'>
                     <div className='Feedback_Text'>
                        <p className='Text1'>Mọi người đã thử</p>
                        <p className='Text1'>Còn bạn thì sao?</p>
                        <p className='Text2'>Khám phá ngay để lựa chọn cho mình hàng đẹp</p>
                        <Button title='Xem ngay' className='btn_Feedback' />
                     </div>
                  </Col>
               </Row>
            </div>
            <div className='Support tws-w-full tws-pt-[130px] tws-h-[700px]'>
               <div className='support-container container '>
                  <h1 className='tws-mx-auto tws-bg-[#55018d] tws-text-white tws-w-[650px] tws-h-[80px] tws-flex tws-items-center tws-justify-center tws-rounded-[10px] tws-shadow-[0px_7px_8px_#767676] tws-text-4xl'>
                     KÊNH HỖ TRỢ NHÀ BÁN HÀNG
                  </h1>

                  <div className='support-card tws-flex tws-pt-[150px] tws-justify-between'>
                     <CardSupport
                        title='TRUNG TÂM HỖ TRỢ NHÀ BÁN'
                        describe='Đội ngũ chăm sóc nhiệt tình, chu đáo luôn sẵn sàng hỗ trợ'
                     />
                     <CardSupport title='WEBSITE SHOP UNIVERSITY' describe='Thư viện kiến thức từ A-Z' />
                     <CardSupport
                        title='CỘNG ĐỒNG NHÀ BÁN HÀNG'
                        describe='Nơi các nhà bán hàng giao lưu, chia sẻ, trao đổi kinh nghiệm'
                     />
                  </div>
               </div>
            </div>
            <div className='Review tws-bg-[#f5f2f7] tws-w-full '>
               <div className='Review-container container'>
                  <h1 className='tws-text-4xl tws-font-bold'>NGƯỜI DÙNG NÓI GÌ VỀ SHOP</h1>

                  <div className='Review-card tws-flex'>
                     <CardReview
                        icon={IoStar}
                        title='Giao hàng rất nhanh, mua hàng rất tiện lợi. 
                Giá cả các sản phẩm rẻ hơn so với bên ngoài.
                Tốt nhất mọi người nên mua ở Shop để đảm bảo chất lượng'
                        name='Nguyễn Ngọc Nhân'
                        date='23/10/2024'
                     />
                     <CardReview
                        icon={IoStar}
                        title='Giao hàng rất nhanh, mua hàng rất tiện lợi. 
                Giá cả các sản phẩm rẻ hơn so với bên ngoài.
                Tốt nhất mọi người nên mua ở Shop để đảm bảo chất lượng'
                        name='Nguyễn Ngọc Nhân'
                        date='23/10/2024'
                     />
                     <div className='Icon Center'>
                        <p>&lt;</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className='Register tws-w-full  tws-flex tws-flex-col tws-justify-center tws-items-center tws-text-center'>
               <div className=''>
                  <p>Đăng ký ngay để biết thêm chi tiết</p>
                  <Button title='Đăng ký' />
               </div>
            </div>
         </div>
      </>
   );
};

export default Landing;
