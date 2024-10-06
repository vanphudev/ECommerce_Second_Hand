import React from "react";
import {Link} from "react-router-dom";
import Frameitems from "./components/frame.Sections/frameSections";
import FrameBrand from "./components/Frame.Brand/frameBrand";
import FrameInfoProduct from "./components/Frame.InfoProduct/frameInfoProduct";
import FrameDetailsProduct from "./components/Frame.InfoProduct/frameDetailsProduct";
import FrameReview from "./components/Frame.InfoProduct/Frame.Review";
import ListPrpducts from "./components/ListProducts/listPrpducts";
import ListCardSale from "./components/ListCardSale/listCardSale";

const WIDTH_PAGE = "1440px";

const PageDetailsProduct = () => {
   return (
      <>
         <div style={{width: WIDTH_PAGE, margin: "0 auto"}} className='tws-flex tws-flex-col tws-flex-wrap tws-gap-5'>
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
