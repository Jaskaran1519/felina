"use client";
import { get, ref } from "firebase/database";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import CategoryFilter from "./CategoryFilter";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

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
          setFilteredProducts(productsArray); // Set initial filtered products
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.tag === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  return (
    <div className="w-[80%] mx-auto  min-h-screen">
      <h1 className="text-[2.3rem] font-semibold text-herofont">
        Our Collection
      </h1>

      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="border-primary border-[2px] p-2 w-full h-[40vh] mx-auto md:w-[35vw] lg:w-[25vw] xl:w-[20vw] md:h-[35vh] lg:h-[25vh] xl:h-[45vh] rounded-lg my-3"
                >
                  <Skeleton height="60%" />
                  <div className="mt-2">
                    <Skeleton width="80%" height={20} />
                    <Skeleton
                      width="60%"
                      height={20}
                      style={{ marginTop: 6 }}
                    />
                    <div className="flex justify-between items-center mt-2">
                      <Skeleton width="40%" height={20} />
                      <div className="flex gap-3">
                        <Skeleton circle width={24} height={24} />
                        <Skeleton circle width={24} height={24} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
          : filteredProducts.map((product) => (
              <div key={product.id}>
                <Link href={`/product/${product.id}`}>
                  <div className="border-primary relative border-[2px] p-2 w-full h-[40vh] mx-auto md:w-[35vw] lg:w-[25vw] xl:w-[20vw] md:h-[35vh] lg:h-[25vh] xl:h-[45vh] rounded-lg my-3 hover:shadow-xl duration-200 hover:cursor-pointer">
                    <div className="w-[100%] flex justify-center h-[25vh] md:h-[20vh] lg:h-[20vw] xl:h-[25vh]">
                      <Image
                        src={product.image}
                        width={300}
                        height={200}
                        className="w-full bg-cover rounded-md"
                        alt={product.name}
                        priority={true} // {false} | {true}
                      />
                    </div>
                    <div className="mt-2">
                      <h1 className="text-[1.2rem] font-semibold py-2 text-herofont">
                        {product.name}
                      </h1>
                      <div className="flex justify-between items-center mt-2">
                        <div className="absolute bottom-3 flex gap-3">
                          <h1 className="line-through text-gray-300 font-bold">
                            ₹{product.fake}
                          </h1>
                          <h1 className="font-semibold">₹{product.price}</h1>
                        </div>
                        <div className="absolute bottom-3 right-2 flex justify-between items-center gap-3">
                          <button className="rounded-full scale-100 hover:scale-110 duration-200">
                            <ShoppingCartIcon />
                          </button>
                          <button className="rounded-full scale-100 hover:scale-110 hover:text-red-500 duration-200">
                            <HeartIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Product;
