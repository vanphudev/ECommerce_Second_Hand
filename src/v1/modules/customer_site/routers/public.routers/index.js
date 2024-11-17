import React from "react";
import DashBroad from "../../layouts/LayoutHome/dashBroad";
import LayoutProfile from "../../layouts/LayoutProfile/layoutProfile";
import PageNotFound from "../../pages/pageNotFound/";
import FeatureBooking from "../../pages/pageFeatureBooking";
import {Spin} from "antd";
import {Navigate} from "react-router-dom";
import {Suspense} from "react";

import TabOrderManager from "../../pages/pageTabOrderManager";
import index from "../../pages/pageProfile";
const Categories = React.lazy(() => import("../../pages/pageCategories"));
const Home = React.lazy(() => import("../../pages/pageHome"));
const SellerCentre = React.lazy(() => import("../../pages/pageSellerCentre/"));
const DetailsProduct = React.lazy(() => import("../../pages/pageDetailsProduct"));
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
const Payment = React.lazy(() => import("../../pages/pagePayment"));
const ResetPasswordForm = React.lazy(() => import("../../pages/pageResetPassword/pageResetPassword"));
const LoginPage = React.lazy(() => import("../../pages/pageLogin"));

const URL_HOME_DEFAULT = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME_DEFAULT;
const URL_HOME = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME;
const URL_HOME_INDEX = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_HOME_INDEX;
const URL_CATEGORIES = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_CATEGORIES;
const URL_SELLER_CENTRE = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_SELLER_CENTRE;
const URL_DETAILS_PRODUCT = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_DETAILS_PRODUCT;
const URL_LANDING = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_LANDING_DEFAULT;
const URL_MembershipPolicy = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_MembershipPolicy;
const URL_PaymentPolicy = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PaymentPolicy;
const URL_BuyingGuide = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_BuyingGuide;
const URL_PersonalInformationSecurity = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PersonalInformationSecurity;
const URL_GiftOfGratitude = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_GiftOfGratitude;
const URL_Contact = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_Contact;
const URL_PROFILE = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE;
const URL_PROFILE_ADDRESS = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_ADDRESS;
const URL_PROFILE_INFORMATION = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_INFORMATION;
const URL_CART = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_CART;
const URL_DETAIL_ORDER = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_DETAIL_ORDER;
const URL_PROFILE_PAYMENT = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_PAYMENT;
const URL_FEATURE_BOOKING = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_FEATURE_BOOKING;
const URL_ORDER_MANAGER = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_ORDER_MANAGER;
const URL_PROFILE_RESET_PASSWORD = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_PROFILE_RESET_PASSWORD;
const URL_LOGIN = import.meta.env.VITE_ROUTER_MODULES_CUSTOMER_SITE_LOGIN;

const PublicRoutes = [
   {
      path: URL_HOME_DEFAULT,
      element: <DashBroad />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: URL_HOME,
            element: <Home />,
         },
         {
            path: URL_HOME_INDEX,
            element: <Home />,
         },
         {
            path: URL_CATEGORIES,
            element: <Categories />,
         },
         {
            path: URL_SELLER_CENTRE,
            element: <SellerCentre />,
         },
         {
            path: URL_DETAILS_PRODUCT,
            element: <DetailsProduct />,
         },
         {
            path: URL_FEATURE_BOOKING,
            element: <FeatureBooking />,
         },
         {
            path: URL_Contact,
            element: <Contact />,
         },
         {
            path: URL_LOGIN,
            element: <LoginPage />,
         },
         {
            path: URL_PROFILE,
            element: <LayoutProfile />,
            children: [
               {
                  index: true,
                  element: <Navigate to={URL_PROFILE_PAYMENT} replace={true} />,
               },
               {
                  index: true,
                  path: URL_PROFILE_PAYMENT,
                  element: (
                     <Suspense fallback={<Spin size='large' fullscreen style={{zIndex: 10000}} />}>
                        <Payment />
                     </Suspense>
                  ),
               },
               {
                  path: URL_PROFILE_INFORMATION,
                  element: (
                     <Suspense fallback={<Spin size='large' fullscreen style={{zIndex: 10000}} />}>
                        <Profile />
                     </Suspense>
                  ),
               },
               {
                  path: URL_DETAIL_ORDER,
                  element: (
                     <Suspense fallback={<Spin size='large' fullscreen style={{zIndex: 10000}} />}>
                        <DetailOrder />
                     </Suspense>
                  ),
               },
               {
                  path: URL_ORDER_MANAGER,
                  element: <TabOrderManager />,
               },
               // {
               //    path: URL_PROFILE_ADDRESS,
               //    element: <Profile />,
               // },
               {
                  path: URL_PROFILE_RESET_PASSWORD,
                  element: <ResetPasswordForm />,
               },
            ],
         },
         {
            path: URL_CART,
            element: <Cart />,
         },
         {
            path: "*",
            element: <PageNotFound />,
         },
      ],
   },
   {
      path: URL_LANDING,
      element: <Landing />,
   },
];

export default PublicRoutes;
