import React from "react";
import {Link} from "react-router-dom";

const URL_HOME = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME;

const PageNotFound = () => {
   return (
      <>
         <h1>404 - Không tìm thấy trang</h1>
         <Link to={URL_HOME}>Trở về trang chủ</Link>
      </>
   );
};

export default PageNotFound;
