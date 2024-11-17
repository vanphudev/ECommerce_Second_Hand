import React from "react";
import Contact from "./components/Contact/Contact.jsx";
import BreadcrumbComponent from "../../components/Breadcrumb/Breadcrumb";

const index = () => {
   return (
      <div>
         <div className='tws-max-w-[1440px]  tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <BreadcrumbComponent name={"Liên hệ"} />
            </div>
         </div>
         <Contact />
      </div>
   );
};

export default index;
