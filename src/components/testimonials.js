import React from "react";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-2 shrink-0">
          <div className="col-span-2 rounded-t-2xl">
            <Image
              src="/testimonial1.png"
              alt="Testimonial"
              width={431}
              height={187}
              className="rounded-t-2xl"
            />
          </div>
          <div>
            {" "}
            <Image
              src="/testimonial2.png"
              alt="Testimonial"
              width={208}
              height={208}
            />
          </div>
          <div>
            {" "}
            <Image
              src="/testimonial3.png"
              alt="Testimonial"
              width={208}
              height={208}
            />
          </div>
        </div>

        <div className="shrink-0">
          <div className="flex flex-col gap-[10px] mb-[32px]">
            <h4 className="text-[22px] font-medium text-primaryColor">What the say</h4>
            <h3 className="text-[32px] font-bold">What Our Customers Say About Us</h3>
          </div>
          <div className="flex gap-[24px] overflow-x-auto">
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
