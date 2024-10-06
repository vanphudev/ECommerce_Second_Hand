import React, {useState} from "react";
import MenuTitle from "../../../../components/MenuTitle/MenuTitle";
import Favourites_01 from "../../components/assets/Images/Favourites_01.png";
import qc_product_01 from "../../components/assets/Images/qc_product_01.png";
import qc_product_02 from "../../components/assets/Images/qc_product_02.png";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {GoChevronDown, GoChevronUp} from "react-icons/go";
import {Button} from "antd";
import "../styles/frameDetailsProduct.scss";
const FrameDetailsProduct = () => {
   const [isShown, setIsShown] = useState(false);
   const toggleContent = () => {
      setIsShown(!isShown);
   };
   return (
      <>
         <div className='frame-details__product tws-grid tws-grid-cols-[825px_270px] tws-gap-5 tws-m-auto'>
            <div className='frame-details__product-left'>
               <MenuTitle name={"MÔ TẢ SẢN PHẨM"} />
               <div className='tws-contents'>
                  {!isShown ? (
                     <>
                        <div className='tws-relative tws-w-full'>
                           <p className='frame-details__product-left__text tws-text-justify'>
                              <span style={{fontWeight: "bold"}}>Sữa Rửa Mặt Tẩy Tế Bào Da Chết St.Ives 170g</span>  là
                              dòng sản phẩm sữa rửa mặt có hạt đến từ thương hiệu St.Ives giúp nhẹ nhàng loại bỏ lớp tế
                              bào chết sần sùi, mang lại cho bạn làn da sáng mịn, mềm mại và rạng rỡ. Sữa rửa mặt được
                              chiết xuất từ thành phần tự nhiên với các mùi hương dịu nhẹ, nhẹ nhàng làm sạch lỗ chân
                              lông.
                              <br />
                              <br />
                              <span style={{fontWeight: "bold"}}>
                                 Sữa rửa mặt tẩy tế bào chết ngừa mụn chiết xuất Trái Mơ St.Ives Acne Control Scrub
                                 Apricot: 
                              </span>
                              Nhẹ nhàng làm sạch bụi bẩn, lấy đi những tế bào chết là nguyên nhân làm bít lỗ chân lông
                              gây ra mụn và các vấn đề về da. Giúp tẩy da chết, làm sạch sâu mà không gây kích ứng da,
                              cho bạn làn da tươi mới, mịn màng và tràn đầy sức sống, ngăn ngừa sản sinh mụn.
                              <br />
                              <br />
                              <span style={{fontWeight: "bold"}}>
                                 Sữa rửa mặt tẩy tế bào chết tươi mát chiết xuất Trái Mơ St.Ives Fresh Skin Scrub
                                 Apricot:
                              </span>
                               Giúp làn da sáng mịn, ngăn ngừa sản sinh mụn. Sau khi sử dụng bạn sẽ cảm nhận được làn da
                              mềm mại và tươi mát.
                              <br />
                              <br />
                              <span style={{fontWeight: "bold"}}>
                                 Sữa rửa mặt tẩy tế bào chết chiết xuất Cafe và Dừa St.Ives Energizing Scrub Coconut &
                                 Coffee:
                              </span>
                               Bổ sung độ ẩm và làm mềm da, tăng cường dưỡng chất cho da thêm sáng khỏe, hạn chế mẫn
                              cảm, sưng đỏ do mụn gây ra, giúp da khỏe mạnh, mịn màng, trắng sáng rạng rỡ hơn, sạch mụn.
                           </p>
                           <div
                              className='tws-text-center tws-absolute'
                              style={{
                                 width: "100%",
                                 background:
                                    "linear-gradient(to top, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))",
                                 padding: "10px",
                              }}>
                              <Button
                                 color='default'
                                 variant='outlined'
                                 iconPosition='end'
                                 icon={<GoChevronDown />}
                                 onClick={toggleContent}>
                                 Xem thêm
                              </Button>
                           </div>
                        </div>
                     </>
                  ) : (
                     <>
                        <p className='frame-details__product-left__text tws-text-justify'>
                           <span style={{fontWeight: "bold"}}>Sữa Rửa Mặt Tẩy Tế Bào Da Chết St.Ives 170g</span>  là
                           dòng sản phẩm sữa rửa mặt có hạt đến từ thương hiệu St.Ives giúp nhẹ nhàng loại bỏ lớp tế bào
                           chết sần sùi, mang lại cho bạn làn da sáng mịn, mềm mại và rạng rỡ. Sữa rửa mặt được chiết
                           xuất từ thành phần tự nhiên với các mùi hương dịu nhẹ, nhẹ nhàng làm sạch lỗ chân lông.
                           <br />
                           <br />
                           <span style={{fontWeight: "bold"}}>
                              Sữa rửa mặt tẩy tế bào chết ngừa mụn chiết xuất Trái Mơ St.Ives Acne Control Scrub
                              Apricot: 
                           </span>
                           Nhẹ nhàng làm sạch bụi bẩn, lấy đi những tế bào chết là nguyên nhân làm bít lỗ chân lông gây
                           ra mụn và các vấn đề về da. Giúp tẩy da chết, làm sạch sâu mà không gây kích ứng da, cho bạn
                           làn da tươi mới, mịn màng và tràn đầy sức sống, ngăn ngừa sản sinh mụn.
                           <br />
                           <br />
                           <span style={{fontWeight: "bold"}}>
                              Sữa rửa mặt tẩy tế bào chết tươi mát chiết xuất Trái Mơ St.Ives Fresh Skin Scrub Apricot:
                           </span>
                            Giúp làn da sáng mịn, ngăn ngừa sản sinh mụn. Sau khi sử dụng bạn sẽ cảm nhận được làn da
                           mềm mại và tươi mát.
                           <br />
                           <br />
                           <span style={{fontWeight: "bold"}}>
                              Sữa rửa mặt tẩy tế bào chết chiết xuất Cafe và Dừa St.Ives Energizing Scrub Coconut &
                              Coffee:
                           </span>
                            Bổ sung độ ẩm và làm mềm da, tăng cường dưỡng chất cho da thêm sáng khỏe, hạn chế mẫn cảm,
                           sưng đỏ do mụn gây ra, giúp da khỏe mạnh, mịn màng, trắng sáng rạng rỡ hơn, sạch mụn.
                           <br />
                           <br />
                           <span style={{fontWeight: "bold"}}>
                              Sữa rửa mặt tẩy tế bào chết ngừa mụn chiết xuất Trà Xanh St.Ives Blackhead Clearing Green
                              Tea Scrub:
                           </span>
                            Nhẹ nhàng làm sạch mụn đầu đen và làm dịu da ửng đỏ, tổn thương do mụn. Thanh lọc da, làm
                           giảm kích ứng và mẩn đỏ do mụn gây ra, giúp da khỏe mạnh, mịn màng.
                           <br />
                           <br />
                           <span style={{fontWeight: "bold"}}>
                              Sữa rửa mặt tẩy tế bào chết chiết xuất Bơ và Mật Ong St.Ives Soft Skin Avocado & Honey
                              Scrub:
                           </span>
                            là giải pháp tuyệt vời giúp làm sạch da một cách nhẹ nhàng nhất, nhưng cũng đồng thời loại
                           bỏ tạp chất và bã nhờn trên da sau một ngày dài, mang đến cho bạn cảm giác nhẹ nhàng, tươi
                           mới.
                           <br />
                           <br />
                           <span style={{fontWeight: "bold"}}>
                              Sữa rửa mặt tẩy tế bào chết chiết xuất Hoa Hồng & Lô Hội St.Ives Gentle Smoothing Scrub
                              Rose Water & Aloe Vera:
                           </span>
                           Nhẹ nhàng lấy đi lớp tế bào chết cứng đầu, mang lại cho bạn làn da mịn màng, sáng xinh như
                           những cánh hoa hồng. Sản phẩm có chứa 100% bột óc chó tự nhiên cùng bộ cánh hoa hồng nghiền
                           mịn, tất cả thành phần được làm từ thiên nhiên an toàn cho mọi làn da.
                           <br />
                           <br />
                           <img src={qc_product_01} alt='Ảnh giới thiệu sản phẩm 01' className='tws-w-full' />
                           <br />
                           <br />
                           <h2 className='tws-uppercase'>Ưu thế nổi bật:</h2>
                           <ol className='tws-list-inside tws-list-disc'>
                              <li>100% chiết xuất từ thành phần tự nhiên, nuôi dưỡng làn da.</li>
                              <li>Chứa Salicylic Acid giúp ngăn ngừa mụn và làm thu nhỏ lỗ chân lông.</li>
                              <li>Giúp tẩy tế bào da chết, làm sạch sâu da.</li>
                              <li>Không chứa paraben (chất bảo quản gây nguy cơ ung thư).</li>
                              <li>Không chứa sulfate (chất tạo bọt gây nguy cơ kích ứng da).</li>
                           </ol>
                           <br />
                           <h2 className='tws-uppercase'>Loại da phù hợp:</h2>
                           <p>Da mụn, da dầu, da khô, da hỗn hợp, da nhạy cảm.</p>
                           <br />
                           <h2 className='tws-uppercase'>Cách sử dụng:</h2>
                           <p>Cho một lượng vừa đủ sữa rửa mặt ra lòng bàn tay, tạo bọt và thoa đều lên da mặt ẩm.</p>
                           <p>Masage nhẹ nhàng trong khoảng 1-2 phút, sau đó rửa sạch lại với nước.</p>
                           <p>Sử dụng 2 lần mỗi ngày vào buổi sáng và tối.</p>
                           <br />
                           <img src={qc_product_02} alt='Ảnh giới thiệu sản phẩm 02' className='tws-w-full' />
                           <br />
                           <br />
                           <h2 className='tws-uppercase'>Thành phần:</h2>
                           <p>
                              <span style={{fontWeight: "bold"}}>Aqua:</span> Nước tinh khiết, giúp làm sạch da, cung
                              cấp độ ẩm cho da.
                           </p>
                           <p>
                              <span style={{fontWeight: "bold"}}>Glycerin:</span> Chất dưỡng ẩm giúp da mềm mại, mịn
                              màng.
                           </p>
                           <p>
                              <span style={{fontWeight: "bold"}}>Cocamidopropyl Betaine:</span> Chất tạo bọt, giúp làm
                              sạch da một cách nhẹ nhàng.
                           </p>
                           <p>
                              <span style={{fontWeight: "bold"}}>Sodium Methyl 2-Sulfolaurate:</span> Chất tạo bọt, giúp
                              làm sạch da một cách nhẹ nhàng.
                           </p>
                           <br />
                           <h2 className='tws-uppercase'>Độ an toàn:</h2>
                           <p>
                              <span style={{fontWeight: "bold"}}>Thương hiệu: </span> St.Ives (trực thuộc tập đoàn
                              Unilever của Mỹ)
                           </p>
                           <p>
                              <span style={{fontWeight: "bold"}}>Xuất xứ thương hiệu: </span>Mỹ
                           </p>
                           <p>
                              <span style={{fontWeight: "bold"}}>Dung tích: </span> 170g
                           </p>
                           <p>
                              <span style={{fontWeight: "bold"}}>Hạn sử dụng: </span>36 tháng kể từ ngày sản xuất
                           </p>
                        </p>
                        <div className='tws-text-center tws-mt-7'>
                           <Button
                              color='default'
                              variant='outlined'
                              iconPosition='end'
                              icon={<GoChevronUp />}
                              onClick={toggleContent}>
                              Thu gọn
                           </Button>
                        </div>
                     </>
                  )}
               </div>
            </div>
            <div className='frame-details__product-right'>
               <MenuTitle name={"CÓ THỂ BẠN THÍCH"} />
               <div className='frame-card__favourites tws-flex tws-flex-nowrap tws-flex-col tws-gap-2'>
                  <div className='frame-card__favourites-item tws-flex tws-flex-nowrap tws-gap-3 tws-items-center'>
                     <img src={Favourites_01} alt='Favourites 01' style={{width: "80px", height: "80px"}} />
                     <div className='tws-flex tws-flex-col tws-gap-1'>
                        <span
                           className='frame-card__favourites-item__name'
                           style={{fontWeight: "bold", fontSize: "13px"}}>
                           Sữa Rửa Mặt Simple ...
                        </span>
                        <div className='tws-flex tws-items-center tws-gap-3'>
                           <span
                              className='frame-card__favourites-item__price'
                              style={{color: "#EF1104", fontWeight: "bold", fontSize: "18px"}}>
                              700.000đ
                           </span>
                           <span
                              className='frame-card__favourites-item__priceOld'
                              style={{
                                 color: "#ACACAC",
                                 fontWeight: "bold",
                                 fontSize: "11px",
                                 textDecoration: "line-through",
                              }}>
                              50.000đ
                           </span>
                        </div>
                        <Button
                           className='btn-brand__AddToCard'
                           style={{backgroundColor: "#55018D", color: "white"}}
                           icon={<AiOutlineShoppingCart style={{fontSize: "20px"}} />}>
                           Thêm vào giỏ
                        </Button>
                     </div>
                  </div>
                  <div className='frame-card__favourites-item tws-flex tws-flex-nowrap tws-gap-3 tws-items-center'>
                     <img src={Favourites_01} alt='Favourites 01' style={{width: "80px", height: "80px"}} />
                     <div className='tws-flex tws-flex-col tws-gap-1'>
                        <span
                           className='frame-card__favourites-item__name'
                           style={{fontWeight: "bold", fontSize: "13px"}}>
                           Sữa Rửa Mặt Simple ...
                        </span>
                        <div className='tws-flex tws-items-center tws-gap-3'>
                           <span
                              className='frame-card__favourites-item__price'
                              style={{color: "#EF1104", fontWeight: "bold", fontSize: "18px"}}>
                              700.000đ
                           </span>
                           <span
                              className='frame-card__favourites-item__priceOld'
                              style={{
                                 color: "#ACACAC",
                                 fontWeight: "bold",
                                 fontSize: "11px",
                                 textDecoration: "line-through",
                              }}>
                              50.000đ
                           </span>
                        </div>
                        <Button
                           className='btn-brand__AddToCard'
                           style={{backgroundColor: "#55018D", color: "white"}}
                           icon={<AiOutlineShoppingCart style={{fontSize: "20px"}} />}>
                           Thêm vào giỏ
                        </Button>
                     </div>
                  </div>
                  <div className='frame-card__favourites-item tws-flex tws-flex-nowrap tws-gap-3 tws-items-center'>
                     <img src={Favourites_01} alt='Favourites 01' style={{width: "80px", height: "80px"}} />
                     <div className='tws-flex tws-flex-col tws-gap-1'>
                        <span
                           className='frame-card__favourites-item__name'
                           style={{fontWeight: "bold", fontSize: "13px"}}>
                           Sữa Rửa Mặt Simple ...
                        </span>
                        <div className='tws-flex tws-items-center tws-gap-3'>
                           <span
                              className='frame-card__favourites-item__price'
                              style={{color: "#EF1104", fontWeight: "bold", fontSize: "18px"}}>
                              700.000đ
                           </span>
                           <span
                              className='frame-card__favourites-item__priceOld'
                              style={{
                                 color: "#ACACAC",
                                 fontWeight: "bold",
                                 fontSize: "11px",
                                 textDecoration: "line-through",
                              }}>
                              50.000đ
                           </span>
                        </div>
                        <Button
                           className='btn-brand__AddToCard'
                           style={{backgroundColor: "#55018D", color: "white"}}
                           icon={<AiOutlineShoppingCart style={{fontSize: "20px"}} />}>
                           Thêm vào giỏ
                        </Button>
                     </div>
                  </div>
                  <div className='frame-card__favourites-item tws-flex tws-flex-nowrap tws-gap-3 tws-items-center'>
                     <img src={Favourites_01} alt='Favourites 01' style={{width: "80px", height: "80px"}} />
                     <div className='tws-flex tws-flex-col tws-gap-1'>
                        <span
                           className='frame-card__favourites-item__name'
                           style={{fontWeight: "bold", fontSize: "13px"}}>
                           Sữa Rửa Mặt Simple ...
                        </span>
                        <div className='tws-flex tws-items-center tws-gap-3'>
                           <span
                              className='frame-card__favourites-item__price'
                              style={{color: "#EF1104", fontWeight: "bold", fontSize: "18px"}}>
                              700.000đ
                           </span>
                           <span
                              className='frame-card__favourites-item__priceOld'
                              style={{
                                 color: "#ACACAC",
                                 fontWeight: "bold",
                                 fontSize: "11px",
                                 textDecoration: "line-through",
                              }}>
                              50.000đ
                           </span>
                        </div>
                        <Button
                           className='btn-brand__AddToCard'
                           style={{backgroundColor: "#55018D", color: "white"}}
                           icon={<AiOutlineShoppingCart style={{fontSize: "20px"}} />}>
                           Thêm vào giỏ
                        </Button>
                     </div>
                  </div>
                  <div className='frame-card__favourites-item tws-flex tws-flex-nowrap tws-gap-3 tws-items-center'>
                     <img src={Favourites_01} alt='Favourites 01' style={{width: "80px", height: "80px"}} />
                     <div className='tws-flex tws-flex-col tws-gap-1'>
                        <span
                           className='frame-card__favourites-item__name'
                           style={{fontWeight: "bold", fontSize: "13px"}}>
                           Sữa Rửa Mặt Simple ...
                        </span>
                        <div className='tws-flex tws-items-center tws-gap-3'>
                           <span
                              className='frame-card__favourites-item__price'
                              style={{color: "#EF1104", fontWeight: "bold", fontSize: "18px"}}>
                              700.000đ
                           </span>
                           <span
                              className='frame-card__favourites-item__priceOld'
                              style={{
                                 color: "#ACACAC",
                                 fontWeight: "bold",
                                 fontSize: "11px",
                                 textDecoration: "line-through",
                              }}>
                              50.000đ
                           </span>
                        </div>
                        <Button
                           className='btn-brand__AddToCard'
                           style={{backgroundColor: "#55018D", color: "white"}}
                           icon={<AiOutlineShoppingCart style={{fontSize: "20px"}} />}>
                           Thêm vào giỏ
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default FrameDetailsProduct;
