import React from "react";
import {Link} from "react-router-dom";

import "./components/styles/featureBooking.scss";
import { AiOutlineRight } from "react-icons/ai";
import LogoAddress from "./components/logoAddress";
import SanPham_DH from "./components/sanPham_DH";
const FeatureBooking = () => {
   return (
      <div className="FeatureBooking">
            <LogoAddress />
            <SanPham_DH />
      </div>
   );
};

export default FeatureBooking;
