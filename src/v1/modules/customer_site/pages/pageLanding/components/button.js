import React from 'react';
import './style.scss'; 

const Button = ({ title }) => {
  return <button className="custom-button tws-w-[130px] tws-h-[50px] tws-bg-[#65558f] tws-text-white tws-rounded-[50px] tws-mt-[30px] tws-text-[20px] tws-border-none tws-cursor-pointer">
  {title}
</button>
};

export default Button;