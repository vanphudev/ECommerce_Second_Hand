import React from "react";
import MenuTitle from "../../../../components/MenuTitle/MenuTitle";
import "../styles/listProducts.scss";
const ListPrpducts = () => {
   return (
      <>
         <div className='list-products tws-flex tws-flex-col tws-gap-3 tws-m-auto'>
            <MenuTitle name={"SẢN PHẨM CÙNG LOẠI"} />
         </div>
      </>
   );
};

export default ListPrpducts;
