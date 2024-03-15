"use client";
import { get, ref } from "firebase/database";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { Heart, HeartIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

const Bestseller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productRef = ref(database, "products");
    get(productRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productsArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...data,
            })
          );
          setProducts(productsArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    products && (
      <div className=" w-[90%] my-5  mx-auto  h-auto">
        <h1 className="text-[2.3rem] text-orange-800  font-bold text-herofont">
          Our Bestsellers
        </h1>

        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  gap-10 ">
          {products.slice(0, 4).map((product) => (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}>
                <div className="border-primary  relative border-[2px] p-2 w-full mx-auto md:w-[35vw] lg:w-[25vw] h-auto xl:w-[20vw] xl:h-[45vh] rounded-lg my-3 hover:shadow-xl duration-200 hover:cursor-pointer ">
                  <div className="w-[100%] flex justify-center h-[25vh] md:h-[20vh]  lg:h-[20vw] xl:h-[25vh]  ">
                    <Image
                      src={product.image}
                      width={300}
                      height={200}
                      className="w-full bg-cover rounded-md"
                      alt="/"
                    />
                  </div>
                  <div className="mt-2">
                    <h1 className="text-lg text-primary py-2 text-herofont">
                      {product.name}
                    </h1>
                    <div className=" flex justify-between items-center mt-2">
                      <div className=" flex gap-3">
                        <h1 className="line-through text-gray-300 font-bold">
                          ₹{product.fake}
                        </h1>
                        <h1 className="font-semibold">₹{product.price}</h1>
                      </div>
                      <div className="flex justify-between items-center gap-3">
                        <button className=" rounded-full scale-100 hover:scale-110   duration-200">
                          <ShoppingCartIcon />
                        </button>
                        <button className=" rounded-full scale-100 hover:scale-110  hover:text-red-500 duration-200">
                          <HeartIcon className=" " />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <Link href="/product">
          <button className="text-[1.2rem] font-semibold px-3 py-2 bg-orange-800 text-white rounded-md">
            View all Products
          </button>
        </Link>
      </div>
    )
  );
};

export default Bestseller;
