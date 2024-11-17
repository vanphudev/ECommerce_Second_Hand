import {Outlet} from "react-router-dom";
import MenuDO from "../../components/MenuList/menu";
import BreadcrumbComponent from "../../components//Breadcrumb/Breadcrumb";

const LayoutProfile = () => {
   return (
      <>
         <div className='tws-max-w-[1440px]  tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <BreadcrumbComponent name={"PROFILE"} />
            </div>
         </div>
         <div className='tws-max-w-[1440px]  tws-m-auto'>
            <div className='tws-max-w-[1125px] tws-min-w-[1125px] tws-mx-auto tws-flex tws-justify-start tws-items-start tws-flex-nowrap tws-gap-5 tws-flex-1 '>
               <MenuDO />
               <div className='tws-w-[calc(100%-260px)] tws-flex tws-flex-1'>
                  <Outlet />
               </div>
            </div>
         </div>
      </>
   );
};

export default LayoutProfile;
