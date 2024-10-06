import React from "react";
import {Link} from "react-router-dom";
import FeaturedCategories from "./featuredCategories.jsx";
import SkinCare from "./skinCare.jsx";
const PageHome = () => {
   return (
      <>
         <FeaturedCategories />
         <SkinCare/>
         <Link to={import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_ABOUT_TEAM07}>Thông tin Team 07</Link>
      </>
   );
};

export default PageHome;
