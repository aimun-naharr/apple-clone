import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export default function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex justify-between items-center w-full screen-max-width">
        {/* logo */}
        <img src={appleImg} alt="apple" width={18} height={18} />

        {/* links */}
        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((nav, i) => {
            return (
              <div
                className="text-sm px-5 text-gray hover:text-white cursor-pointer translate-all"
                key={nav}
              >
                {nav}
              </div>
            );
          })}
        </div>

        {/* search */}
        <div className="flex items-baseline max-sm:justify-end max-sm:flex-1 gap-7">
          <img
            src={searchImg}
            alt="search img"
            height={18}
            width={18}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="cart"
            height={18}
            width={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
}
