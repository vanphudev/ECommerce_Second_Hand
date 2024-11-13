import React from "react";
import DashBroad from "../../layouts/LayoutHome/dashBroad";
import PageNotFound from "../../pages/pageNotFound/";
import FeatureBooking from "../../pages/pageFeatureBooking";
import TabOrderManager from "../../pages/pageTabOrderManager";
const Categories = React.lazy(() => import("../../pages/pageCategories"));
const Home = React.lazy(() => import("../../pages/pageHome"));
const SellerCentre = React.lazy(() => import("../../pages/pageSellerCentre"));
const DetailsProduct = React.lazy(() =>
  import("../../pages/pageDetailsProduct")
);
const Landing = React.lazy(() => import("../../pages/pageLanding"));

const MembershipPolicy = React.lazy(() => import("../../pages/pageMembershipPolicy"));
const PaymentPolicy = React.lazy(() => import("../../pages/pagePaymentPolicy"));
const BuyingGuide = React.lazy(() => import("../../pages/pageBuyingGuide"));
const PersonalInformationSecurity = React.lazy(() => import("../../pages/pagePersonalInformationSecurity"));
const GiftOfGratitude = React.lazy(() => import("../../pages/pageGiftOfGratitude"));
const Contact = React.lazy(() => import("../../pages/pageContact"));
const Profile = React.lazy(() => import("../../pages/pageProfile"));



const Cart = React.lazy(() => import("../../pages/pageCart"));
const DetailOrder = React.lazy(() => import("../../pages/pageDetailOrder"));

const URL_HOME_DEFAULT = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME_DEFAULT;

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

const URL_MembershipPolicy = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_MembershipPolicy;
const URL_PaymentPolicy = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PaymentPolicy;
const URL_BuyingGuide = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_BuyingGuide;
const URL_PersonalInformationSecurity = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PersonalInformationSecurity;
const URL_GiftOfGratitude = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_GiftOfGratitude;
const URL_Contact = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_Contact;
const URL_Profile = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_Profile;

const URL_CART = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_CART;
const URL_DETAIL_ORDER = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_DETAIL_ORDER;

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

            path: URL_MembershipPolicy,
            element: <MembershipPolicy />,
         },
         {
            path: URL_PaymentPolicy,
            element: <PaymentPolicy />,
         },
         {
            path: URL_BuyingGuide,
            element: <BuyingGuide />,
         },
         {
            path: URL_PersonalInformationSecurity,
            element: <PersonalInformationSecurity />,
         },
         {
            path: URL_GiftOfGratitude,
            element: <GiftOfGratitude />,
         },
         {
            path: URL_Profile,
            element: <Profile />,
         },
         {
            path: URL_Contact,
            element: <Contact />,

            // Routes for: Cart
            path: URL_CART,
            element: <Cart />,
         },
         {
            // Routes for: Cart
            path: URL_DETAIL_ORDER,
            element: <DetailOrder />,

         },
         {
            // Routes for: NotFound
            path: "*",
            element: <PageNotFound />,
         },
      ],
   },
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
