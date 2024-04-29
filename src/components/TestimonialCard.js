import React from "react";
import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="max-w-[452px] max-h-[210px] bg-[#F1F1F1] rounded-2xl">
      <div className="py-[28px] px-[20px]">
        <div className="grid grid-cols-2 gap-[18px]">
          <div>
            <Image
              src="/testimage1.png"
              alt="Testimonial"
              width={59}
              height={60}
            />
          </div>
          <div>
            <h5 className="text-[20px] font-medium">Naura Silvana</h5>
          </div>
          <div className="flex items-center gap-[4px]">
            <Image
              src="/filledstar.svg"
              alt="Testimonial"
              width={24}
              height={24}
            />
            <Image
              src="/filledstar.svg"
              alt="Testimonial"
              width={24}
              height={24}
            />
            <Image
              src="/filledstar.svg"
              alt="Testimonial"
              width={24}
              height={24}
            />
            <Image
              src="/filledstar.svg"
              alt="Testimonial"
              width={24}
              height={24}
            />
            <Image
              src="/filledstar.svg"
              alt="Testimonial"
              width={24}
              height={24}
            />
          </div>
        </div>

        <div>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
