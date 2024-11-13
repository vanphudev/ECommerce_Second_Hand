import React from "react";
import { LuBox } from "react-icons/lu";
import { CgDollar } from "react-icons/cg";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { CiStar } from "react-icons/ci";

import { format } from "date-fns";

export const getDateTime = () => {
  return format(new Date(), "HH:mm dd-MM-yyyy");
};

export const checkStatus = (selectedOption, index) => {
  if (selectedOption > index) {
    return "finish";
  } else if (selectedOption === index) {
    return "pending";
  } else {
    return "upcoming";
  }
};

export const getItem = (selectedOption) => [
  {
    text: "Đơn hàng đã đặt",
    date: getDateTime(),
    status: checkStatus(selectedOption, 0),
    icon: <LuBox />,
  },
  {
    text: "Đã xác nhận thông tin thanh toán",
    date: selectedOption > 0 ? getDateTime() : null,
    status: checkStatus(selectedOption, 1),
    icon: <CgDollar />,
  },
  {
    text: "Đã giao cho ĐVVC",
    date: selectedOption > 1 ? getDateTime() : null,
    status: checkStatus(selectedOption, 2),
    icon: <CiDeliveryTruck />,
  },
  {
    text: "Chờ giao hàng",
    date: selectedOption > 2 ? getDateTime() : null,
    status: checkStatus(selectedOption, 3),
    icon: <IoMdCheckmarkCircleOutline />,
  },
  {
    text: "Đánh giá",
    date: selectedOption > 3 ? getDateTime() : null,
    status: checkStatus(selectedOption, 4),
    icon: <CiStar />,
  },
];
