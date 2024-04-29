import React from "react";
import Image from "next/image";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="my-[80px] container mx-auto">
      <div className="relative bg-neutral-900 py-16 text-center rounded-3xl" style={{
        backgroundImage: "url('/cta.png')",
        background: "cover"
      }}>
        <div className=" flex flex-col gap-[30px] items-center">
          <h2 className="text-[32px] font-bold text-white">
            Join our member and get <br /> discount up to 50%
          </h2>
          <Button title="Sign Up" className="" />
        </div>
        {/* <Image
          src="/cta.png"
          alt="CTA"
          width={1530}
          height={332}
          className="rounded-2xl"
        /> */}
      </div>
    </section>
  );
};

export default CTA;
