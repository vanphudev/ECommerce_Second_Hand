import React from 'react';
import './style.scss'; 

const Button = ({ title }) => {
  return <button className="custom-button">{title}</button>;
};

export default Button;