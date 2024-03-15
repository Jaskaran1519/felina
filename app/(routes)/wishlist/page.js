"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../context/page";
import Image from "next/image";
import { ArrowLeft, Cross, HeartIcon, Minus, Plus, X } from "lucide-react";
import Link from "next/link";

const page = () => {
  const { wishItems, removeFromWish } = useContext(Context);

  return (
    <div className="w-[90%] mx-auto">
      <div className="flex justify-between flex-wrap h-auto xl:min-h-screen">
        <div className="w-full md:w-[65%] h-auto mx-auto ">
          <div className="flex justify-between mr-6 items-center">
            <h1 className="text-[2rem] text-herofont ">Favourites</h1>
            <p className="text-[1.2rem]">Items: {wishItems.length}</p>
          </div>
          <hr className="mt-4" />
          {wishItems && wishItems.length > 0 ? (
            wishItems.map((item, key) => (
              <div key={key} className="w-full  mx-2 my-3">
                <div className="flex justify-between items-center">
                  <Image
                    className=""
                    src={item.image}
                    width={80}
                    height={80}
                    alt="/"
                  />
                  <div className="w-[20%] mx-auto flex-col justify-center items-center">
                    <p className="text-[1.2rem] font-semibold text-gray-600">
                      {item.tag}
                    </p>
                    <p className="text-[0.9rem] line-clamp-2">{item.name}</p>
                  </div>

                  <div className="mx-auto flex justify-center items-center">
                    <Image
                      src="/heart.png"
                      width={50}
                      height={50}
                      alt="/"
                      onClick={() => {
                        removeFromWish(item.name);
                      }}
                    />
                  </div>
                </div>
                <hr className="my-5" />
              </div>
            ))
          ) : (
            <div className="w-full h-[50vh] flex justify-center items-center">
              <h1 className="text-[3rem] font-bold text-center text-gray-300 text-herofont">
                No Items in Wishlist
              </h1>
            </div>
          )}
          <Link href="/product">
            <div className="flex gap-3 float-right rounded-md  py-2 px-1 cursor-pointer  hover:bg-gray-100">
              {" "}
              <ArrowLeft />
              <p className="text-gray-600 font-semibold">Back to Shop</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
