import React from "react";
import {Link} from "react-router-dom";
import FrameBrand from "./components/Frame.Brand/frameBrand";
import ListPrpducts from "./components/ListProducts/listPrpducts";
import ListCardSale from "./components/ListCardSale/listCardSale";
import ListPrpductCate from "./components/ListProducts/listPrpductCate";
import ListProductFilter from "./components/listProductFilter/listProductFilter";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";
const WIDTH_PAGE = "1440px";

const PageSellerChanels = () => {
   return (
      <>
         <div className='tws-max-w-[1440px] tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <BreadcrumbComponent name={"Amazing Tech shop"} />
            </div>
         </div>
         <div
            style={{width: WIDTH_PAGE, margin: "0 auto", padding: "0px"}}
            className=' tws-flex tws-flex-col tws-flex-wrap tws-gap-10'>
            <FrameBrand />
            <ListCardSale />
            <ListPrpducts />
            <ListPrpductCate />
            <ListProductFilter />
         </div>
      </>
   );
};

export default PageSellerChanels;
