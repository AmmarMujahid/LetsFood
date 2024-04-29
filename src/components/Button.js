import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      className={`py-[10px] px-[20px] rounded-full bg-primaryColor text-[14px] font-bold ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
