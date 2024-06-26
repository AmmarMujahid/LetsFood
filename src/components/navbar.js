import React from "react";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ className }) => {
  const navItems = [
    { title: "Home", id: "home" },
    { title: "Menu", id: "menu" },
    { title: "How it works", id: "howitworks" },
    { title: "About", id: "about" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <section className={`${className}`}>
      <nav className={`py-[30px] container mx-auto`}>
        <div className="flex justify-between items-center">
          <div className="flex gap-[4px] items-center">
            <span className="font-semibold text-[24px] items-center cursor-pointer">
              Let&apos;sFood
            </span>
            <span className="cursor-pointer">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0996 10.835C19.5835 10.835 20.0479 10.644 20.3917 10.3035C20.7355 9.96297 20.9309 9.50051 20.9356 9.01665C20.9403 8.53248 20.7536 8.06605 20.4161 7.71889C20.0785 7.37174 19.6175 7.17197 19.1334 7.16309M18.941 14.4892C18.4571 14.4892 17.9928 14.2982 17.649 13.9577C17.3052 13.6172 17.1097 13.1548 17.1051 12.6709C17.1003 12.1867 17.2871 11.7203 17.6246 11.3731C17.9621 11.026 18.4231 10.8262 18.9072 10.8173M19.0996 18.1611C19.5835 18.1611 20.0479 17.9701 20.3917 17.6296C20.7355 17.2891 20.9309 16.8266 20.9356 16.3428C20.9403 15.8586 20.7536 15.3922 20.4161 15.045C20.0785 14.6979 19.6175 14.4981 19.1334 14.4892M26.4434 10.835C26.9273 10.835 27.3916 10.644 27.7354 10.3035C28.0792 9.96297 28.2747 9.50051 28.2793 9.01665C28.2841 8.53248 28.0973 8.06605 27.7598 7.71889C27.4223 7.37174 26.9613 7.17197 26.4772 7.16309M26.2848 14.4892C25.8009 14.4892 25.3366 14.2982 24.9928 13.9577C24.649 13.6172 24.4535 13.1548 24.4488 12.6709C24.4441 12.1867 24.6308 11.7203 24.9683 11.3731C25.3059 11.026 25.7669 10.8262 26.251 10.8173M26.4434 18.1611C26.9273 18.1611 27.3916 17.9701 27.7354 17.6296C28.0792 17.2891 28.2747 16.8266 28.2793 16.3428C28.2841 15.8586 28.0973 15.3922 27.7598 15.045C27.4223 14.6979 26.9613 14.4981 26.4772 14.4892M12.3243 10.835C12.8082 10.835 13.2725 10.644 13.6163 10.3035C13.9601 9.96297 14.1556 9.50051 14.1602 9.01665C14.165 8.53273 13.9784 8.06651 13.6412 7.7194C13.304 7.37229 12.8434 7.17235 12.3595 7.16309M12.1671 14.4892C11.6833 14.4892 11.2189 14.2982 10.8751 13.9577C10.5313 13.6172 10.3358 13.1548 10.3312 12.6709C10.3265 12.187 10.513 11.7208 10.8502 11.3737C11.1874 11.0265 11.648 10.8266 12.1319 10.8173M12.3243 18.1611C12.8082 18.1611 13.2725 17.9701 13.6163 17.6296C13.9601 17.2891 14.1556 16.8266 14.1602 16.3428C14.165 15.8589 13.9784 15.3926 13.6412 15.0455C13.304 14.6984 12.8434 14.4985 12.3595 14.4892"
                  stroke="#FAA41A"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.0396 39.8369H26.2554V35.4659C23.4398 36.7085 21.7992 36.9023 19.5168 36.9493C16.663 37.0081 14.7286 36.5146 13.0396 36.0916V39.8369Z"
                  stroke="#383747"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M36.2811 24.0126C33.8136 33.2275 24.3827 38.6957 15.1678 36.2267C12.2434 35.4459 9.57664 33.9078 7.43636 31.7675C5.29608 29.6272 3.75798 26.9604 2.97717 24.0361L36.2811 24.0126Z"
                  fill="#FAA41A"
                  stroke="#383747"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.96835 21.0677H36.2869V24.0919H2.96835V21.0677Z"
                  stroke="#383747"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M24.49 21.0589C35.9462 21.5113 33.066 13.348 41.5333 12.6107C42.3705 12.5372 42.8111 12.5211 43.9861 12.596L44.0302 12.5813C42.5688 11.7118 39.8751 10.2401 37.6265 10.8643C36.4764 11.1845 34.6846 12.4212 33.4846 14.7785C30.4634 21.3938 27.5215 21.0457 25.1274 21.0575L24.49 21.0589Z"
                  stroke="#383747"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.5399 26.6079C30.5001 29.7804 27.7168 31.9835 24.4855 32.5828"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>

          <ul className="flex gap-[37px] flex-1 justify-end">
            {navItems.map((link) => (
              <li key={link.id}>
                <Link
                  className="text-lightColor text-[22px] font-medium pb-[5px] hover:border-b-4 hover:border-primaryColor"
                  href={link.id}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-[74px] mr-[32px]">
            <ul className="flex gap-[32px]">
              <li className="cursor-pointer">
                <Image
                  src="/search.svg"
                  alt="Search icon"
                  width={24}
                  height={24}
                />
              </li>
              <li className="cursor-pointer">
                <Image src="/cart.svg" alt="Cart" width={28} height={28} />
              </li>
            </ul>
          </div>

          <div>
            <Button title="Sign in" />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
