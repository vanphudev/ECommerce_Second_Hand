import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../../components/LayoutHome/Footer";
import Header from "../../components/LayoutHome/Header";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";

const DashBroad = () => {
   return (
      <>
         <div className='tws-w-full tws-flex tws-flex-col tws-justify-center tws-gap-5'>
            <Header />
            <Outlet />
            <Footer />
         </div>
      </>
   );
};
export default DashBroad;
