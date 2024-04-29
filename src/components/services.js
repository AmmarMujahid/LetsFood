import React from "react";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="px-[204px] py-[80px] container mx-auto">
      <div>
        <div className="mb-[32px]">
          <Title
            title="How it works"
            subtitle="What We Serve"
            para="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
          />
        </div>
        <div className="flex gap-[155px]">
          <div>
            <ServiceCard
              pic="/order.png"
              title="Easy To Order"
              subtitle="You only order through the app"
            />
          </div>
          <div>
            <ServiceCard
              pic="/delivery.png"
              title="Easy To Order"
              subtitle="You only order through the app"
            />
          </div>
          <div>
            <ServiceCard
              pic="/courier.png"
              title="Easy To Order"
              subtitle="You only order through the app"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
