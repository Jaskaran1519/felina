"use client";
import { Heart, Info, ShoppingCartIcon } from "lucide-react";
import { Context } from "../../context/page";
import Link from "next/link";
import React, { useContext } from "react";
const Header = () => {
  const { cartItems, wishItems } = useContext(Context);
  return (
    <div className="flex gap-[3vw] items-center text-[3vh] mt-4 ">
      <Link href="/wishlist">
        <div className="relative">
          <Heart />
          {wishItems && wishItems.length > 0 ? (
            <span className="w-4 h-4 bg-orange-800 text-[0.5rem] rounded-full absolute -top-2 -right-2 text-white flex justify-center items-center -z-10">
              {wishItems.length}
            </span>
          ) : null}
        </div>
      </Link>
      <Link href="/cart">
        <div className="relative">
          <ShoppingCartIcon />
          {cartItems && cartItems.length > 0 ? (
            <span className="w-4 h-4 bg-orange-800 text-[0.5rem] rounded-full absolute -top-2 -right-2 text-white flex justify-center items-center -z-10">
              {cartItems.length}
            </span>
          ) : null}
        </div>
      </Link>
      <Link href="/product">
        <button className="text-[2vh] px-3 py-1.5 bg-orange-900 text-white font-bold rounded">
          Shop
        </button>
      </Link>
    </div>
  );
};

export default Header;
