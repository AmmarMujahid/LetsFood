import React from "react";
import Image from "next/image";

const ServiceCard = ({ pic, title, subtitle, className }) => {
  return (
    <div className="max-w-[241px] max-h-[316px]">
      <div className={`flex flex-col gap-[24px] ${className}`}>
        <div>
          <Image src={pic} alt="image" width={180} height={180} />
        </div>

        <div>
          <h4 className="text-[28px] font-semibold">{title}</h4>
        </div>

        <div>
          <p className="text-[20px] font-medium">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
