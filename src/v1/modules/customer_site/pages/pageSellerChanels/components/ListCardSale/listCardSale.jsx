import React from "react";
import CardSale from "../CardSale/cardSale";
import "../../styles/listCardSale.scss";
import MenuTitle from "../../../../components/MenuTitle/MenuTitle.jsx";

const ListCardSale = () => {
   return (
      <>
         <div className='tws-max-w-[1440px]  tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <MenuTitle name={"MÃ GIẢM GÍA DÀNH CHO BẠN"} />
            </div>
         </div>
         <div className='list-card-sale tws-flex tws-flex-nowrap tws-gap-4 tws-m-auto tws-p-1 tws-items-center tws-justify-start'>
            <CardSale />
            <CardSale />
            <CardSale />
         </div>
      </>
   );
};

export default ListCardSale;
