import React from "react";
import Landing from "../../modules/customer_site/pages/pageLanding/index.jsx";
const routesLanding = [
   {
      path: import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_LANDING_DEFAULT,
      element: <Landing />,
   },
];

export default routesLanding;
