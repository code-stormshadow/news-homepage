import React from "react";
import iconmenuclose from "../assets/images/iconmenuclose.svg";
// import iconmenu from "../assets/images/iconmenu.svg";

// import { useState } from "react";

const MobileMenu = ({ toggleMenu }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {

  //   setIsMenuOpen(!isMenuOpen);
  //   };
  // const closeDropdown = () => {
  // setIsMenuOpen(false);
  // };

  return (
    <div className="container absolute w-screen ml-6 h-screen -top-10 -left-10">
      <div className="flex flex-row h-full">
        <div className=" block bg-black bg-opacity-70 h-full w-5/6 "></div>
        <div className="bg-white pl-3 flex flex-col w-screen">
          <img
            onClick={toggleMenu}
            className="block w-[40px] mb-28 mt-8 ml-40 "
            src={iconmenuclose}
            alt="icon"
          ></img>

          <div className="ml-2 space-y-5">
            <h2 className=" hover:text-red-600 font-inter text-base font-light">
              Home
            </h2>
            <h3 className=" hover:text-red-600 font-inter text-base font-light">
              New
            </h3>
            <h3 className=" hover:text-red-600 font-inter text-base font-light">
              Popular
            </h3>
            <h3 className=" hover:text-red-600 font-inter text-base font-light">
              Trending
            </h3>
            <h3 className=" hover:text-red-600 font-inter text-base font-light">
              Categories
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
