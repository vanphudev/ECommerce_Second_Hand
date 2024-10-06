import React from "react";
import {Link} from "react-router-dom";
import FeaturedCategories from "./featuredCategories.jsx";
import SkinCare from "./skinCare.jsx";
const PageHome = () => {
   return (
      <>
         <FeaturedCategories />
         <SkinCare />
      </>
   );
};

export default PageHome;
