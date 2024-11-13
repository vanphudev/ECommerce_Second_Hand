import React from "react";
import {Link} from "react-router-dom";
import "./components/styles/orderManager.scss";
import OrderManager from "./components/orderManager";
const TabOrderManager = () => {
   return (
      <div className="PageOrderManager">
            <OrderManager />
      </div>
   );
};

export default TabOrderManager;
