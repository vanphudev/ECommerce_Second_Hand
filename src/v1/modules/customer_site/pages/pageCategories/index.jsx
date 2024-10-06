import React from "react";
import Categories from "./Categories.jsx";
import { Link } from "react-router-dom";
const PageHome = () => {
   return (
      <>
         <Categories />
         <Link to={import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_ABOUT_TEAM07}>Thông tin Team 07</Link>
      </>
   );
};

export default PageHome;
