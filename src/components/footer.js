import React from "react";

const Footer = ({ className }) => {
  return (
    <section className={`${className}`}>
      <div className=" container mx-auto">
        <div className="flex justify-between py-[90px]">
          <div className="flex-1">
            <div>
              <h3 className="text-[24px] font-semibold">LetsFood</h3>
              <p className="text-[20px] text-lightColor">
                Jalan Semangka Raya, Telaga Murni, Cikarang Barat, Kab. Bekasi
              </p>
            </div>
            <div className="flex gap-[24px] items-center">
              <svg
                width="69"
                height="73"
                viewBox="0 0 69 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_38_96)">
                  <rect
                    x="12"
                    y="8.54224"
                    width="45"
                    height="48"
                    rx="22.5"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.965 21.6082C31.138 21.5542 31.512 21.5422 34.5 21.5422C37.488 21.5422 37.862 21.5552 39.034 21.6082C40.206 21.6612 41.006 21.8482 41.706 22.1192C42.439 22.3962 43.104 22.8292 43.654 23.3892C44.214 23.9382 44.646 24.6022 44.922 25.3362C45.194 26.0362 45.38 26.8362 45.434 28.0062C45.488 29.1812 45.5 29.5552 45.5 32.5422C45.5 35.5302 45.487 35.9042 45.434 37.0772C45.381 38.2472 45.194 39.0472 44.922 39.7472C44.646 40.4813 44.2133 41.1464 43.654 41.6962C43.104 42.2562 42.439 42.6882 41.706 42.9642C41.006 43.2362 40.206 43.4222 39.036 43.4762C37.862 43.5302 37.488 43.5422 34.5 43.5422C31.512 43.5422 31.138 43.5292 29.965 43.4762C28.795 43.4232 27.995 43.2362 27.295 42.9642C26.5609 42.6882 25.8958 42.2555 25.346 41.6962C24.7864 41.1469 24.3533 40.4821 24.077 39.7482C23.806 39.0482 23.62 38.2482 23.566 37.0782C23.512 35.9032 23.5 35.5292 23.5 32.5422C23.5 29.5542 23.513 29.1802 23.566 28.0082C23.619 26.8362 23.806 26.0362 24.077 25.3362C24.3537 24.6023 24.7871 23.9375 25.347 23.3882C25.896 22.8287 26.5605 22.3957 27.294 22.1192C27.994 21.8482 28.794 21.6622 29.964 21.6082H29.965ZM38.945 23.5882C37.785 23.5352 37.437 23.5242 34.5 23.5242C31.563 23.5242 31.215 23.5352 30.055 23.5882C28.982 23.6372 28.4 23.8162 28.012 23.9672C27.499 24.1672 27.132 24.4042 26.747 24.7892C26.382 25.1443 26.1012 25.5765 25.925 26.0542C25.774 26.4422 25.595 27.0242 25.546 28.0972C25.493 29.2572 25.482 29.6052 25.482 32.5422C25.482 35.4792 25.493 35.8272 25.546 36.9872C25.595 38.0602 25.774 38.6422 25.925 39.0302C26.101 39.5072 26.382 39.9402 26.747 40.2952C27.102 40.6602 27.535 40.9412 28.012 41.1172C28.4 41.2682 28.982 41.4472 30.055 41.4962C31.215 41.5492 31.562 41.5602 34.5 41.5602C37.438 41.5602 37.785 41.5492 38.945 41.4962C40.018 41.4472 40.6 41.2682 40.988 41.1172C41.501 40.9172 41.868 40.6802 42.253 40.2952C42.618 39.9402 42.899 39.5072 43.075 39.0302C43.226 38.6422 43.405 38.0602 43.454 36.9872C43.507 35.8272 43.518 35.4792 43.518 32.5422C43.518 29.6052 43.507 29.2572 43.454 28.0972C43.405 27.0242 43.226 26.4422 43.075 26.0542C42.875 25.5412 42.638 25.1742 42.253 24.7892C41.8979 24.4243 41.4657 24.1434 40.988 23.9672C40.6 23.8162 40.018 23.6372 38.945 23.5882ZM33.095 35.9332C33.8797 36.2599 34.7534 36.304 35.5669 36.058C36.3805 35.812 37.0834 35.2912 37.5556 34.5845C38.0278 33.8778 38.2401 33.0291 38.156 32.1833C38.072 31.3376 37.697 30.5472 37.095 29.9472C36.7112 29.5637 36.2472 29.27 35.7363 29.0874C35.2255 28.9047 34.6804 28.8376 34.1405 28.8909C33.6006 28.9441 33.0792 29.1164 32.6138 29.3954C32.1485 29.6743 31.7507 30.053 31.4493 30.5041C31.1479 30.9552 30.9502 31.4675 30.8705 32.0042C30.7908 32.5409 30.8312 33.0885 30.9885 33.6078C31.1459 34.127 31.4165 34.6048 31.7807 35.007C32.145 35.4091 32.5938 35.7254 33.095 35.9332ZM30.502 28.5442C31.027 28.0192 31.6503 27.6027 32.3363 27.3186C33.0223 27.0345 33.7575 26.8882 34.5 26.8882C35.2425 26.8882 35.9777 27.0345 36.6637 27.3186C37.3497 27.6027 37.973 28.0192 38.498 28.5442C39.023 29.0693 39.4395 29.6926 39.7236 30.3785C40.0078 31.0645 40.154 31.7997 40.154 32.5422C40.154 33.2847 40.0078 34.02 39.7236 34.7059C39.4395 35.3919 39.023 36.0152 38.498 36.5402C37.4377 37.6006 35.9995 38.1963 34.5 38.1963C33.0005 38.1963 31.5623 37.6006 30.502 36.5402C29.4417 35.4799 28.846 34.0418 28.846 32.5422C28.846 31.0427 29.4417 29.6046 30.502 28.5442ZM41.408 27.7302C41.5381 27.6075 41.6423 27.4599 41.7143 27.2962C41.7863 27.1325 41.8248 26.956 41.8274 26.7772C41.83 26.5983 41.7967 26.4208 41.7295 26.255C41.6622 26.0893 41.5624 25.9387 41.436 25.8123C41.3095 25.6858 41.1589 25.586 40.9932 25.5188C40.8275 25.4515 40.6499 25.4182 40.4711 25.4208C40.2922 25.4234 40.1157 25.4619 39.952 25.5339C39.7883 25.606 39.6407 25.7101 39.518 25.8402C39.2793 26.0933 39.1486 26.4294 39.1537 26.7772C39.1588 27.125 39.2992 27.4571 39.5452 27.7031C39.7911 27.949 40.1233 28.0895 40.4711 28.0945C40.8189 28.0996 41.155 27.9689 41.408 27.7302Z"
                    fill="#1D1D1D"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_38_96"
                    x="0"
                    y="0.542236"
                    width="69"
                    height="72"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.1125 0 0 0 0 0.1125 0 0 0 0 0.1125 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_38_96"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_38_96"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <svg
                width="94"
                height="97"
                viewBox="0 0 94 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_38_102)">
                  <rect
                    x="24"
                    y="20.5422"
                    width="46"
                    height="48"
                    rx="23"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M48.397 53.5409V45.3449H51.162L51.573 42.1359H48.397V40.0919C48.397 39.1659 48.655 38.5319 49.984 38.5319H51.668V35.6709C50.8487 35.5831 50.0251 35.5407 49.201 35.5439C46.757 35.5439 45.079 37.0359 45.079 39.7749V42.1299H42.332V45.3389H45.085V53.5409H48.397Z"
                    fill="#1D1D1D"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_38_102"
                    x="0"
                    y="0.542236"
                    width="94"
                    height="96"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="12" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.1125 0 0 0 0 0.1125 0 0 0 0 0.1125 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_38_102"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_38_102"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <svg
                width="69"
                height="73"
                viewBox="0 0 69 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_38_92)">
                  <rect
                    x="12"
                    y="8.54224"
                    width="45"
                    height="48"
                    rx="22.5"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M45.853 25.5025C45.018 25.8725 44.121 26.1225 43.178 26.2355C44.151 25.6533 44.8789 24.737 45.226 23.6575C44.3118 24.2005 43.3113 24.5827 42.268 24.7875C41.5664 24.0384 40.6371 23.5418 39.6243 23.375C38.6116 23.2081 37.5721 23.3803 36.6672 23.8648C35.7624 24.3492 35.0428 25.1189 34.6202 26.0542C34.1975 26.9896 34.0955 28.0383 34.33 29.0375C32.4777 28.9445 30.6656 28.4631 29.0114 27.6244C27.3572 26.7858 25.8978 25.6087 24.728 24.1695C24.328 24.8595 24.098 25.6595 24.098 26.5115C24.0976 27.2785 24.2864 28.0337 24.6479 28.7102C25.0093 29.3867 25.5322 29.9635 26.17 30.3895C25.4303 30.366 24.7069 30.1661 24.06 29.8065V29.8665C24.0599 30.9422 24.432 31.9849 25.1132 32.8175C25.7943 33.6501 26.7426 34.2214 27.797 34.4345C27.1108 34.6202 26.3913 34.6476 25.693 34.5145C25.9905 35.4401 26.57 36.2495 27.3504 36.8294C28.1307 37.4093 29.0729 37.7307 30.045 37.7485C28.3948 39.0439 26.3569 39.7466 24.259 39.7435C23.8874 39.7436 23.5161 39.7219 23.147 39.6785C25.2765 41.0477 27.7553 41.7743 30.287 41.7715C38.857 41.7715 43.542 34.6735 43.542 28.5175C43.542 28.3175 43.537 28.1155 43.528 27.9155C44.4393 27.2565 45.2259 26.4404 45.851 25.5055L45.853 25.5025Z"
                    fill="#1D1D1D"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_38_92"
                    x="0"
                    y="0.542236"
                    width="69"
                    height="72"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.1125 0 0 0 0 0.1125 0 0 0 0 0.1125 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_38_92"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_38_92"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-[31px] flex-1">
            <h4 className="text-[20px] font-medium">Company</h4>
            <ul className="flex flex-col gap-[16px]">
              <li>About Us</li>
              <li>Career</li>
              <li>How It Work</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[31px] flex-1">
            <h4 className="text-[20px] font-medium">Policy</h4>
            <ul className="flex flex-col gap-[16px]">
              <li>FAQ</li>
              <li>Privacy</li>
              <li>Shipping</li>
            </ul>
          </div>

          <div className="flex flex-col gap-[31px] flex-1">
            <h4 className="text-[20px] font-medium">Get In Touch</h4>
            <ul className="flex flex-col gap-[16px]">
              <li>+62 896 7311 2766</li>
              <li>food@example.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-lightColor py-[47px] text-center">
          © 2022 LetsFood. ALL RIGHT RESERVED.
        </div>
      </div>
    </section>
  );
};

export default Footer;
