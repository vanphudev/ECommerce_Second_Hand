import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
   return (
      <>
         <h1 >Trang Header</h1>
         <h3 ><Link to={import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_LANDING_DEFAULT}>Landing</Link></h3>
      </>
   );
};

export default Header;
