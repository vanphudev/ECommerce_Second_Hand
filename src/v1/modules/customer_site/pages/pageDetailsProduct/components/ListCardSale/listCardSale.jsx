import React from "react";
import CardSale from "../CardSale/cardSale";
import "../styles/listCardSale.scss";
const ListCardSale = () => {
   return (
      <>
         <div className='list-card-sale tws-flex tws-flex-nowrap tws-gap-4 tws-m-auto tws-p-1 tws-items-center tws-justify-start'>
            <CardSale />
            <CardSale />
            <CardSale />
         </div>
      </>
   );
};

export default ListCardSale;
