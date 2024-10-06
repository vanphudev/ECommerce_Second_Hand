import React from "react";

const MenuTitle = ({name}) => {
   return (
      <div className='frame-title-c' style={{width: "100%", marginBottom: "15px"}}>
         <span
            className='frame-title-c__text'
            style={{textTransform: "uppercase", fontWeight: "bold", fontSize: "22px"}}>
            {name}
         </span>
         <div style={{width: "100%", backgroundColor: "black", height: "2px"}} className='tws-relative'>
            <div
               className='absolute top-0 left-0'
               style={{
                  width: "20%",
                  backgroundColor: "#FAC126",
                  height: "4px",
                  boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
               }}></div>
         </div>
      </div>
   );
};

export default MenuTitle;
