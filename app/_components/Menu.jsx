"use client";
import { Crosshair, MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 z-50 ${
          toggle ? "w-[full] h-screen" : ""
        }`}
      />
      <div
        className={`absolute top-0 left-0 z-50 ${
          toggle
            ? "w-full overflow-hidden h-screen bg-orange-200 duration-200 "
            : "w-[30vw] h-screen duration-200 "
        }`}
      >
        {!toggle ? (
          <MenuIcon
            className="absolute top-[3vh] left-[5vw] cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
        ) : (
          <div>
            <Crosshair
              className="absolute top-[3vh] left-[5vw] cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <ul
                className="text-[5vh] font-semibold list-none space-y-7 "
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/product">Products</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
