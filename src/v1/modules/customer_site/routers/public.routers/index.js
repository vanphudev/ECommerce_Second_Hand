import React from "react";
import DashBroad from "../../layouts/LayoutHome/dashBroad";
import PageNotFound from "../../pages/pageNotFound/";
import FeatureBooking from "../../pages/pageFeatureBooking";
import TabOrderManager from "../../pages/pageTabOrderManager";

import TabOrderManager from "../../pages/pageTabOrderManager";

const Categories = React.lazy(() => import("../../pages/pageCategories"));
const Home = React.lazy(() => import("../../pages/pageHome"));
const SellerCentre = React.lazy(() => import("../../pages/pageSellerCentre"));
const DetailsProduct = React.lazy(() =>
  import("../../pages/pageDetailsProduct")
);
const Landing = React.lazy(() => import("../../pages/pageLanding"));

const URL_HOME_DEFAULT = import.meta.env
  .VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME_DEFAULT;
const URL_HOME = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME;
const URL_HOME_INDEX = import.meta.env
  .VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME_INDEX;
const URL_CATEGORIES = import.meta.env
  .VITE_ROUTER_MODULES_CUSTOMER_SITE_CATEGORIES;
const URL_SELLER_CENTRE = import.meta.env
  .VITE_ROUTER_MODULES_CUSTOMER_SITE_SELLER_CENTRE;
const URL_DETAILS_PRODUCT = import.meta.env
  .VITE_ROUTER_MODULES_CUSTOMER_SITE_DETAILS_PRODUCT;
const URL_LANDING = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_LANDING;
const URL_FEATURE_BOOKING = import.meta.env
  .VITE_ROUTER_MODULES_CUSTOMER_SITE_FEATURE_BOOKING;
const URL_ORDER_MANAGER = import.meta.env
  .VITE_ROUTER_MODULES_CUSTOMER_SITE_ORDER_MANAGER;

const PublicRoutes = [
  {
    path: URL_HOME_DEFAULT,
    element: <DashBroad />,
    children: [
      {
        // Routes for: Home
        index: true,
        element: <Home />,
      },
      {
        // Routes for: Home
        path: URL_HOME,
        element: <Home />,
      },
      {
        // Routes for: Home
        path: URL_HOME_INDEX,
        element: <Home />,
      },
      {
        // Routes for: Categories
        path: URL_CATEGORIES,
        element: <Categories />,
      },
      {
        // Routes for: SellerCentre
        path: URL_SELLER_CENTRE,
        element: <SellerCentre />,
      },
      {
        // Routes for: DetailsProduct
        path: URL_DETAILS_PRODUCT,
        element: <DetailsProduct />,
      },
      {
        // Routes for: DetailsProduct
        path: URL_FEATURE_BOOKING,
        element: <FeatureBooking />,
      },
      {
        // Routes for: DetailsProduct
        path: URL_ORDER_MANAGER,
        element: <TabOrderManager />,
      },
      {
        // Routes for: NotFound
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },

  // Routes for: Landing
  {
    path: URL_LANDING,
    element: <Landing />,
  },
];

export default PublicRoutes;
