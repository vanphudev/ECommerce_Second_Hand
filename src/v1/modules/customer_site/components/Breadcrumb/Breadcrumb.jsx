import React from "react";
import {HomeOutlined, UserOutlined} from "@ant-design/icons";
import {Breadcrumb} from "antd";

const BreadcrumbComponent = ({name}) => {
   const capitalizeFirstLetter = (string) => {
      if (!string) return "";
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
   };
   return (
      <Breadcrumb
         className='tws-mb-1 tws-mt-1 tws-font-bold tws-text-[20px] tws-text-purple'
         items={[
            {
               href: "/",
               title: <span style={{color: "#55018d"}}>{capitalizeFirstLetter("Trang chủ")}</span>,
            },
            {
               title: <span style={{color: "#55018d"}}>{capitalizeFirstLetter(name)}</span>,
            },
         ]}
      />
   );
};

export default BreadcrumbComponent;
