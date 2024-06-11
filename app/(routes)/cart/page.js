"use client";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Context } from "../../../context/page";
import Image from "next/image";
import { ArrowLeft, Cross, Minus, Plus, X } from "lucide-react";
import Link from "next/link";

const page = () => {
  const { cartItems, removeFromCart, setCartItems } = useContext(Context);
  const [fakecount, setFakecount] = useState(1);
  const [shippingCost, setShippingCost] = useState(100);
  const [code, setCode] = useState(false);

  function updateItemCount(name, newCount) {
    // Update the context with the updated cart items
    setCartItems(
      cartItems.map((item) =>
        item.name === name ? { ...item, count: newCount } : item
      )
    );
  }
  const handleShippingChange = (event) => {
    setShippingCost(parseInt(event.target.value)); // Update shipping cost based on selection
  };
  const checkCode = (e) => {
    if (e.target.value == "gay2004") {
      setCode(true);
    } else {
      setCode(false);
    }
  };

  return (
    <div className="w-[90%] mx-auto">
      <div className="xl:flex justify-between  ">
        <div className="w-full xl:w-[65%] h-auto mx-auto xl:min-h-screen mb-5 min-h-[50vh]">
          <div className="flex justify-between mr-6 items-center">
            <h1 className="text-[2rem] text-herofont ">Shopping Cart</h1>
            <p className="text-[1.2rem]">Items: {cartItems.length}</p>
          </div>
          <hr className="mt-4" />
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, key) => (
              <div key={key} className="w-full mx-2 my-3">
                <div className="flex justify-between">
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
                  <div className="w-[15%] flex  mx-auto items-center gap-3 ">
                    <Minus
                      className="cursor-pointer"
                      onClick={() => {
                        updateItemCount(
                          item.name,
                          // Ensure count is a number before calculation
                          typeof item.count === "number"
                            ? item.count > 1
                              ? item.count - 1
                              : 1
                            : 1
                        );
                        fakecount == 1 ? null : setFakecount(fakecount - 1);
                      }}
                      disabled={
                        typeof item.count === "undefined" || item.count === 1
                      }
                    />
                    <p className="text-[1.25rem] font-semibold">
                      {typeof item.count === "number" ? item.count : 1}{" "}
                    </p>
                    <Plus
                      className="cursor-pointer"
                      onClick={(event) => {
                        item.count = fakecount;
                        updateItemCount(
                          item.name,
                          // Ensure count is a number before calculation
                          typeof item.count === "number" ? item.count + 1 : 1
                        );
                        setFakecount(fakecount + 1);

                        event.stopPropagation(); // Prevent bubbling
                      }}
                    />
                  </div>
                  <p className="items-center w-[20%] flex justify-center text-[1.2rem] font-semibold">
                    ₹
                    {typeof item.count === "number"
                      ? item.price * item.count
                      : item.price * 1}
                  </p>
                  <div className="mx-auto flex justify-center items-center">
                    <X
                      className=""
                      onClick={() => {
                        removeFromCart(item.name);
                      }}
                    />
                  </div>
                </div>
                <hr className="my-5" />
              </div>
            ))
          ) : (
            <div className="w-full h-[50vh] flex justify-center items-center">
              <h1 className="text-[3rem] font-bold text-gray-300 text-herofont">
                Your Cart is Empty
              </h1>
            </div>
          )}
          <Link href="/product">
            <div className="flex gap-3 float-right rounded-md  py-2 px-1 cursor-pointer  hover:bg-gray-100 ">
              {" "}
              <ArrowLeft />
              <p className="text-gray-600 font-semibold">Back to Shop</p>
            </div>
          </Link>
        </div>
        <div className="w-full md:w-[70%] mx-auto xl:w-[30%] h-auto bg-gray-100 z-0 ">
          <div className="w-[80%] mt-[5vh] mx-auto  z-50">
            <h1 className="text-[2rem] border-b-2 border-gray-800 font-semibold p-4">
              Summary
            </h1>

            <div className="flex flex-wrap justify-between mx-2 mt-3">
              <p className="font-semibold text-gray-800">
                Items: {cartItems.length}
              </p>
              <p className="font-bold text-gray-800">
                Total amount: ₹ {/* Total price calculation */}
                {cartItems.reduce((totalPrice, item) => {
                  // Ensure count is a number before multiplication
                  const count = typeof item.count === "number" ? item.count : 1;
                  return totalPrice + item.price * count;
                }, 0)}
              </p>
            </div>
            <div className="mt-7 font-semibold text-[1.2rem] ">
              Shipping Option
            </div>
            <select
              value={shippingCost}
              onChange={(e) => {
                handleShippingChange(e);
              }}
              className="w-full  my-4 text-gray-800 font-semibold px-1 "
            >
              <option value="100" className="hover:bg-gray-200">
                Standard Delivery - ₹ 100
              </option>
              <option value="200" className="hover:bg-gray-200">
                Premium Delivery - ₹ 200
              </option>
            </select>

            <div className="mt-6 h-[15vh]">
              <h1 className="text-[1.2rem] text-gray-900 font-semibold">
                Coupon Code
              </h1>
              <div className="w-full flex justify-between items-center mt-3">
                <input
                  onChange={(e) => {
                    checkCode(e);
                  }}
                  className=" w-[70%] p-2 rounded-sm"
                  placeholder="Enter the code here"
                />
                {code && (
                  <button
                    onClick={() => {
                      setCode(true);
                    }}
                    className="px-3 py-2 bg-gray-300 rounded-md"
                  >
                    Submit
                  </button>
                )}
              </div>
              {code ? (
                <h1 className="text-green-600 font-semibold mt-2">
                  Code Applied
                </h1>
              ) : null}
            </div>

            {code && (
              <div className="flex flex-wrap justify-between mt-5 ">
                <p className="font-semibold text-gray-800">Total Price:</p>
                <p className="font-bold text-gray-800">
                  ₹{" "}
                  {cartItems.reduce((totalPrice, item) => {
                    const count =
                      typeof item.count === "number" ? item.count : 1;
                    return totalPrice + item.price * count;
                  }, 0) +
                    shippingCost -
                    50}
                </p>
              </div>
            )}
            {!code && (
              <div className="flex flex-wrap justify-between mt-5 ">
                <p className="font-semibold text-gray-800">Total Price:</p>
                <p className="font-bold text-gray-800">
                  ₹{" "}
                  {cartItems.reduce((totalPrice, item) => {
                    const count =
                      typeof item.count === "number" ? item.count : 1;
                    return totalPrice + item.price * count;
                  }, 0) + shippingCost}
                </p>
              </div>
            )}
            <div className="mx-auto w-[60%]">
              <button className="w-full bg-gray-700 text-white text-[1.1rem] rounded-md mt-[5vh] mb-5 p-2">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
