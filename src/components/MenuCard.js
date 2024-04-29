import React from "react";
import Image from "next/image";

const MenuCard = ({ pic, title, subtitle, price, rating }) => {
  return (
    <div className="max-w-[350px] max-h-[380px] shadow-2xl rounded-2xl">
      <div className="flex flex-col justify-between py-[13px]">
        <div className="bg-[#F1F1F1] px-[25px] py-[13px] rounded-t-2xl">
          <Image src={pic} alt="Menu Item" width={230} height={230} />
        </div>

        <div className="flex flex-col px-[22px]">
          <div className="flex flex-col items-center mb-[13px]">
            <h5 className="text-[20px] font-medium">{title}</h5>
            <h6 className="text-[16px]">{subtitle}</h6>
          </div>

          <div className="flex justify-between">
            <span className="text-[20px] font-medium">{price}</span>
            <span className="cursor-pointer">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
