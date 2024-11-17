import React from "react";
import {Link} from "react-router-dom";
import FeaturedCategories from "./components/featuredCategories.jsx";
import SkinCare from "./components/skinCare.jsx";
import Makeup from "./components/makeUp.jsx";
import "./components/styles/home.scss";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";

const PageHome = () => {
   return (
      <>
         <div className='tws-max-w-[1440px]  tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <BreadcrumbComponent name={"HOME"} />
            </div>
         </div>
         <div className='Home'>
            <FeaturedCategories />
            <Makeup />
            <SkinCare />
         </div>
      </>
   );
};

export default PageHome;
