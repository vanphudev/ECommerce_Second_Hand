import React from "react";
import CategoryList from "../../../../components/SidebarCatogoryProduct/CategoryList/CategoryList.jsx";
import PriceFilter from "../../../../components/SidebarCatogoryProduct/PriceFilter/PriceFilter.jsx";
import TagFilter from "../../../../components/SidebarCatogoryProduct/TagFilter/TagFilter.jsx";
import TypeFilter from "../../../../components/SidebarCatogoryProduct/TypeFilter/TypeFilter";
import VendorFilter from "../../../../components/SidebarCatogoryProduct/VendorFilter/VendorFilter.jsx";
import "../../styles/Sidebar.scss";

const Sidebar = () => {
   return (
      <div className='dqdt-sidebar'>
         <CategoryList />
         <div class='filter-content'>
            <PriceFilter />
            <TypeFilter />
         </div>
      </div>
   );
};

export default Sidebar;
