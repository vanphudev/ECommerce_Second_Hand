import React from "react";
import {Link} from "react-router-dom";
import FeaturedCategories from "./components/featuredCategories.jsx";
import SkinCare from "./components/skinCare.jsx";
import Makeup from "./components/makeUp.jsx";
import "./components/styles/home.scss";
const PageHome = () => {
   return (
      <div className="Home">
         <FeaturedCategories />
         <SkinCare/>
         <Makeup/>
         <Link to={import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_ABOUT_TEAM07}>Thông tin Team 07</Link>
      </div>
   );
};

export default PageHome;
