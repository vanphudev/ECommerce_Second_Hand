import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../../components/LayoutHome/Footer";
import Header from "../../components/LayoutHome/Header";

const DashBroad = () => {
   return (
      <>
         <Header />
         <Outlet />
         <Footer />
      </>
   );
};
export default DashBroad;
