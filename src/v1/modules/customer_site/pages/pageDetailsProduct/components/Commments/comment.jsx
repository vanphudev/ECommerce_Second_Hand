import React, {useState} from "react";
import Logo from "../../components/assets/icons/logo-amazing-tech-v2.png";
import Product_01 from "../../components/assets/Images/product-01.png";
import Product_02 from "../../components/assets/Images/product-02.png";
import Product_03 from "../../components/assets/Images/product-03.png";
import Product_04 from "../../components/assets/Images/product-04.png";
import {GoStarFill} from "react-icons/go";
import {AiOutlineMore, AiFillLike, AiOutlineLike} from "react-icons/ai";
import "../styles/comments.scss";
const Comment = ({user, feedback_value, comments}) => {
   const [isLike, setIsLike] = useState(false);
   return (
      <>
         <div className='tws-w-full tws-flex tws-flex-col'>
            <div className='user__info tws-flex tws-flex-nowrap tws-gap-2 tws-items-center'>
               <div className='user__info__avatar'>
                  <img src={Logo} alt='Avatar User' style={{maxWidth: "60px", maxHeight: "60px"}} />
               </div>
               <div className='tws-flex tws-flex-col tws-gap-1'>
                  <div className='user__info__name'>
                     <span style={{fontWeight: "bold"}}>user0949498557573</span>
                  </div>
                  <div className='user__info__rating'>
                     <div className='tws-flex tws-flex-nowrap tws-gap-1'>
                        <GoStarFill style={{color: "#FAC126", fontSize: "15px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "15px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "15px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "15px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "15px"}} />
                     </div>
                  </div>
                  <div className='user__info__date tws-flex tws-flex-nowrap tws-gap-1'>
                     <span>10/10/2021</span>
                     <span>|</span>
                     <span>Phân loại hàng: HB02_BH 24 tháng</span>
                  </div>
               </div>
            </div>
            <div className='user__comment-criteria tws-ps-[70px] tws-pt-2'>
               <p>
                  <span style={{fontWeight: "bold"}}>Tính năng nổi bật: </span>
                  <span>máy hút khỏe, gọn nhẹ</span>
               </p>
               <p>
                  <span style={{fontWeight: "bold"}}>Ưu điểm: </span>
                  <span>nhỏ gọn, dễ sử dụng</span>
               </p>
               <p>
                  <span style={{fontWeight: "bold"}}>Nhược điểm: </span>
                  <span>không có</span>
               </p>
            </div>
            <div className='user__comment tws-ps-[70px] tws-pt-2'>
               <div className='user__comment__contents'>
                  <p style={{fontWeight: "initial"}} className='tws-text-justify'>
                     Sau nhiều lần đổi nguồn sạc, máy đã đc nạp đầy. Đã hút thử máy khỏe, khá êm. Đầu hút nhỏ, dễ luồn
                     lách nhưng dài hơn chút thì tốt. Nên mua nhé, nhất là các bác tài. Với mức giá chưa đến 70k thì quá
                     ổn. Cảm ơn và tặng shop 5 sao vì chất lượng và tư vấn nhiệt tình
                  </p>
               </div>
               <div className='user__comment__imgs'>
                  <img src={Product_01} alt='Image' />
                  <img src={Product_02} alt='Image' />
                  <img src={Product_03} alt='Image' />
                  <img src={Product_04} alt='Image' />
               </div>
               <div className='user__comment__action tws-flex tws-flex-nowrap tws-items-center tws-justify-between'>
                  <div className='tws-flex tws-flex-nowrap tws-items-center tws-gap-1'>
                     {isLike ? (
                        <span
                           onClick={() => setIsLike(!isLike)}
                           style={{color: isLike ? "#55018D" : "black", cursor: "pointer"}}>
                           <AiFillLike style={{fontSize: "25px"}} />
                        </span>
                     ) : (
                        <span
                           onClick={() => setIsLike(!isLike)}
                           style={{color: isLike ? "#55018D" : "black", cursor: "pointer"}}>
                           <AiOutlineLike style={{fontSize: "25px"}} />
                        </span>
                     )}
                     <span>32</span>
                  </div>
                  <div>
                     <AiOutlineMore style={{fontSize: "25px"}} />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Comment;
