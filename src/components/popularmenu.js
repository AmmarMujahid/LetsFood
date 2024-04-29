import React from "react";
import Title from "./Title";
import Button from "./Button";
import MenuCard from "./MenuCard";

const PopularMenu = () => {
  return (
    <section className="mb-[40px] container mx-auto">
      <div className="flex flex-col">
        <div>
          <Title
            title="Our menu"
            subtitle="Our Popular Menu"
            para="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam"
          />
        </div>

        <div className="flex justify-between mb-[70px]">
          <div>
            <MenuCard
              pic="/menu1.png"
              title="Mie Ramen"
              subtitle="lorem ipsum"
              price="$ 20.2"
              rating={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9646 6.12862C8.29142 0.454909 0.85714 3.54577 0.85714 9.72634C0.85714 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z"
                    fill="#1D1D1D"
                    fill-opacity="0.7"
                  />
                </svg>
              }
            />
          </div>
          <div>
            <MenuCard
              pic="/menu2.png"
              title="Mie Ramen"
              subtitle="lorem ipsum"
              price="$ 20.2"
              rating={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9646 6.12862C8.29142 0.454909 0.85714 3.54577 0.85714 9.72634C0.85714 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z"
                    fill="#1D1D1D"
                    fill-opacity="0.7"
                  />
                </svg>
              }
            />
          </div>
          <div>
            <MenuCard
              pic="/menu3.png"
              title="Mie Ramen"
              subtitle="lorem ipsum"
              price="$ 20.2"
              rating={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9646 6.12862C8.29142 0.454909 0.85714 3.54577 0.85714 9.72634C0.85714 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z"
                    fill="#1D1D1D"
                    fill-opacity="0.7"
                  />
                </svg>
              }
            />
          </div>
          <div>
            <MenuCard
              pic="/menu4.png"
              title="Mie Ramen"
              subtitle="lorem ipsum"
              price="$ 20.2"
              rating={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-neutral-900 hover:text-primaryColor"
                  xmlns="http://www.w3.org/2000/svg"
                >   
                  <path
                    d="M11.9646 6.12862C8.29142 0.454909 0.85714 3.54577 0.85714 9.72634C0.85714 14.3675 11.0491 21.6275 11.9646 22.5715C12.8863 21.6275 22.5714 14.3675 22.5714 9.72634C22.5714 3.59262 15.6446 0.454909 11.9646 6.12862Z"
                    // fill="#1D1D1D"
                    fill="currentColor"
                    fill-opacity="0.7"
                  />
                </svg>
              }
            />
          </div>
        </div>

        <div className="text-center">
          <Button title="More Menu" />
        </div>
      </div>
    </section>
  );
};

export default PopularMenu;
