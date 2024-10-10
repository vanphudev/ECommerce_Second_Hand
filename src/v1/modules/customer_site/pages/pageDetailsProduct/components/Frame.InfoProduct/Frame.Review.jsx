import React from "react";
import {GoStarFill} from "react-icons/go";
import MenuTitle from "../../../../components/MenuTitle/MenuTitle";
import "../styles/frameReviews.scss";
import Comment from "../../components/Commments/comment";
const FrameReview = () => {
   return (
      <>
         <div className='frame-review tws-w-full tws-m-auto tws-flex tws-flex-col tws-gap-3'>
            <MenuTitle name={"Đánh giá sản phẩm"} />
            <div className='frame-review__title tws-w-full'>
               <div
                  className='frame-review__title-text tws-p-4  tws-rounded-md tws-flex tws-flex-nowrap tws-gap-4 tws-items-center'
                  style={{backgroundColor: "rgba(182, 150, 248, 0.3)"}}>
                  <div>
                     <span style={{fontSize: "60px", fontWeight: "bold", color: "#55018D"}}>4.7</span>
                     <span style={{fontSize: "30px", color: "#55018D"}}>/5</span>
                     <div className='tws-flex tws-flex-nowrap tws-gap-1'>
                        <GoStarFill style={{color: "#FAC126", fontSize: "25px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "25px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "25px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "25px"}} />
                        <GoStarFill style={{color: "#FAC126", fontSize: "25px"}} />
                     </div>
                  </div>
                  <div className='frame-review__title-line tws-w-full'>
                     <div className='frame-review__select-items tws-flex tws-flex-wrap tws-gap-2'>
                        <span className='frame-review__select-item frame-review__select-item__active'>Tất cả</span>
                        <span className='frame-review__select-item'>5 sao (234)</span>
                        <span className='frame-review__select-item'>4 sao (234)</span>
                        <span className='frame-review__select-item'>3 sao (234)</span>
                        <span className='frame-review__select-item'>2 sao (234)</span>
                        <span className='frame-review__select-item'>1 sao (234)</span>
                        <span className='frame-review__select-item'>Có Bình luận (23,5k)</span>
                        <span className='frame-review__select-item'>Có Hình ảnh/Video (23,5k)</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className='frame-review__contents tws-w-full'>
               <div className='tws-flex tws-flex-col tws-gap-5'>
                  <Comment />
                  <Comment />
                  <Comment />
                  <Comment />
               </div>
            </div>
         </div>
      </>
   );
};

export default FrameReview;
