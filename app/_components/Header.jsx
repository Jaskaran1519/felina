"use client";
import { Heart, Info, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <div className="flex gap-[3vw] items-center text-[3vh] mt-4 ">
      <Link href="/wishlist">
        <Heart />
      </Link>
      <Link href="/cart">
        <ShoppingCartIcon />
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
