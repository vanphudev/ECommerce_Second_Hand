import React from "react";
import LoginPage from "../../modules/customer_site/pages/pageLogin";
const routesLogin = [
   {
      path: import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_LOGIN,
      element: <LoginPage />,
   },
];

export default routesLogin;
