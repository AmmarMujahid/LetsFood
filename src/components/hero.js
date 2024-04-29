import React from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className="bg-[#FFF9EA] container mx-auto">
        <div className="absolute top-[600px] left-0">
          <Image src="/curve.svg" alt="Curve" width={179} height={37} />
          <Image src="/curve.svg" alt="Curve" width={179} height={37} />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[21px] shrink-0">
            <div>
              <h3 className="text-[48px] font-semibold">
                Be The Fastest In <br /> Delivery Your{" "}
                <span className="text-primaryColor">Food</span>
              </h3>
            </div>
            <div>
              <p className="text-[18px] text-lightColor">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                ut aliquam, purus sit amet
              </p>
            </div>
            <div>
              <Button title="Get Started" />
            </div>
          </div>

          <div className="shrink-0 relative">
            <div className="bg-baseColor size-[74px] rounded-full absolute top-[249px] right-[16px]"></div>
            <div className="bg-baseColor size-[54px] rounded-full absolute top-[40px] right-[446px]"></div>
            <div className="bg-baseColor size-[41px] rounded-full absolute top-[463px] right-[535px]"></div>
            <div className="bg-baseColor size-[19px] rounded-full absolute top-[237px] right-[437px]"></div>
            <Image
              src="/img-hero.png"
              alt="Hero Image"
              width={500}
              height={589}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
