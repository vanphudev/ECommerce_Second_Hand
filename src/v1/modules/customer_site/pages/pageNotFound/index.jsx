import React from "react";
import {Result, Button} from "antd";
import {useNavigate} from "react-router-dom";

const PageNotFound = () => {
   const navigate = useNavigate();
   return (
      <div className='tws-max-w-[1440px]  tws-m-auto'>
         <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-center tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
            <Result
               status='404'
               title='404'
               subTitle='Xin lỗi, trang bạn tìm không tồn tại.'
               extra={
                  <Button style={{backgroundColor: "#55018D", color: "white"}} onClick={() => navigate("/")}>
                     Trở về trang chủ
                  </Button>
               }
            />
         </div>
      </div>
   );
};

export default PageNotFound;
