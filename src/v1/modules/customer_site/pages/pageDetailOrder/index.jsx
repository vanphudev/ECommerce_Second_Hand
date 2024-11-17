import React, {useState} from "react";
import Title from "./components/title.js";
import {Select, Divider} from "antd";
import ButtonConfirm from "./components/button/buttonConfirm.js";
import Address from "./components/address/address.js";
import ItemProduct from "./components/itemProduct/itemProduct.js";
import OrderTracking from "./components/orderTracking/orderTracking.js";
import TotalPayment from "./components/table/totalPayment.js";
import MenuTitle from "../../components/MenuTitle/MenuTitle.jsx";

const DetailOrder = () => {
   const [selectedOption, setSelectedOption] = useState(0);
   const [showBuyBack, setShowBuyBack] = useState(false);
   const [showEvaluate, setShowEvaluate] = useState(false);
   const handleOptionChange = (value) => {
      setSelectedOption(value);
   };

   const handleConfirmClick = () => {
      if (selectedOption === 3) {
         alert("Cảm ơn bạn đã đặt hàng");
         setSelectedOption(4);
         setShowBuyBack(true);
         setShowEvaluate(true);
      }
   };

   return (
      <>
         <div>
            <div className='tws-flex tws-justify-between tws-text-2xl tws-font-medium tws-items-center'>
               <MenuTitle name={"CHI TIẾT ĐƠN HÀNG"} />
            </div>
            <div className='tws-flex tws-flex-nowrap tws-gap-2 tws-justify-end tws-items-center'>
               <Select className='tws-w-[200px]' onChange={handleOptionChange} defaultValue={0}>
                  <Select.Option value={0}>Đơn hàng đã đặt</Select.Option>
                  <Select.Option value={1}>Đã xác nhận thông tin đơn hàng</Select.Option>
                  <Select.Option value={2}>Giao hàng cho DVVC</Select.Option>
                  <Select.Option value={3}>Chờ giao hàng</Select.Option>
               </Select>
            </div>
            <div className='col_2_main tws-py-5'>
               <Title />
               <OrderTracking selectedOption={selectedOption} style={{marginTop: "90px"}} />
               <ButtonConfirm
                  selectedOption={selectedOption}
                  onConfirmClick={handleConfirmClick}
                  showBuyBack={showBuyBack}
                  showEvaluate={showEvaluate}
               />
               <Address selectedOption={selectedOption} />
               <div>
                  <ItemProduct />
                  <ItemProduct />
                  <ItemProduct />
               </div>
               <TotalPayment />
            </div>
         </div>
      </>
   );
};

export default DetailOrder;
