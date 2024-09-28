import React from "react";
import {Link} from "react-router-dom";
const PageHome = () => {
   return (
      <>
         <h1>Nội dung trang Loại sản phẩm</h1>
         <Link to={import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_ABOUT_TEAM07}>Thông tin Team 07</Link>
      </>
   );
};

export default PageHome;
