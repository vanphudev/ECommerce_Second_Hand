import React from "react";
import {Link} from "react-router-dom";
import Frameitems from "./components/frame.Sections/frameSections";
import FrameBrand from "./components/Frame.Brand/frameBrand";
import FrameInfoProduct from "./components/Frame.InfoProduct/frameInfoProduct";
import FrameDetailsProduct from "./components/Frame.InfoProduct/frameDetailsProduct";
import FrameReview from "./components/Frame.InfoProduct/Frame.Review";
import ListPrpducts from "./components/ListProducts/listPrpducts";
import ListCardSale from "./components/ListCardSale/listCardSale";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
const WIDTH_PAGE = "1440px";

const PageDetailsProduct = () => {
   return (
      <>
         <div className='tws-max-w-[1440px] tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <BreadcrumbComponent name={"Sữa Rửa Mặt St.Ives Tẩy Tế Bào Chết Trà Xanh Ngừa Mụn"} />
            </div>
         </div>
         <div
            style={{width: WIDTH_PAGE, margin: "0 auto", padding: "0px"}}
            className=' tws-flex tws-flex-col tws-flex-wrap tws-gap-5'>
            <Frameitems />
            <ListCardSale />
            <FrameBrand />
            <FrameInfoProduct />
            <FrameDetailsProduct />
            <FrameReview />
            <ListPrpducts />
         </div>
      </>
   );
};

export default PageDetailsProduct;
