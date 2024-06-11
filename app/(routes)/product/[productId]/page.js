"use client";
import { useContext, useEffect, useState } from "react";
import { database } from "../../../firebaseConfig";
import { get, ref } from "firebase/database";
import Image from "next/image";
import { Context } from "../../../../context/page";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const page = ({ params }) => {
  const id = params.productId;

  const [product, setProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false); // State for button content

  useEffect(() => {
    if (isAdding) {
      const timeout = setTimeout(() => setIsAdding(false), 2000); // Reset after 2 seconds
      return () => clearTimeout(timeout);
    }
  }, [isAdding]); // Only run when isAdding changes

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const productRef = ref(database, `products/${id}`);
        try {
          const snapshot = await get(productRef);
          if (snapshot.exists()) {
            const productData = snapshot.val();
            setProduct(productData);
          } else {
            console.log("Product not found");
          }
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchProduct();
  }, [id]);

  const { handleAddtocart, handleAddtoWishlist } = useContext(Context);

  return (
    <div className="w-[85%] mx-auto mt-[10vh] h-auto md:min-h-[50vh] xl:min-h-screen">
      <div className="flex gap-8 flex-wrap">
        {product ? (
          <>
            <div className="w-full h-[40vh] lg:w-[45vw] xl:h-[70vh] relative">
              <Image
                className="w-full object-cover rounded-md"
                src={product.image}
                layout="fill"
                alt=".."
              />
            </div>
            <div className="w-full lg:w-[35vw] h-auto">
              <h1 className="text-[2.2rem] leading-10 text-herofont font-semibold text-gray-800">
                {product.name}
              </h1>
              <p className="mt-3 text-gray-600 font-medium">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-[5vh]">
                <div className="flex gap-3">
                  <p className="line-through text-[1.5rem] font-bold text-gray-500">
                    ₹{product.fake}
                  </p>
                  <p className="text-[1.5rem] font-bold text-gray-700">
                    ₹{product.price}
                  </p>
                </div>
                <div className="flex">
                  <p className="font-bold">4.3</p>
                  <Image src="/star.svg" width={15} height={15} alt="/" />
                  <p className="pl-3">{`(18 reviews)`}</p>
                </div>
              </div>
              <div className="w-[60%] mx-auto mt-4">
                <button
                  onClick={() => {
                    handleAddtocart(product);
                    setIsAdding(true);
                  }}
                  className="w-full my-2 bg-gray-200 rounded-full p-3 text-[1.25rem] hover:bg-gray-300 cursor-pointer font-semibold"
                >
                  {isAdding ? (
                    <Image
                      className="mx-auto"
                      src="/addtocart.gif"
                      width={30}
                      height={30}
                      alt="Adding to cart"
                    />
                  ) : (
                    "Add to cart"
                  )}
                </button>
                <button
                  className="w-full my-2 bg-gray-200 rounded-full p-3 text-[1.25rem] hover:bg-gray-300 cursor-pointer font-semibold"
                  onClick={() => {
                    handleAddtoWishlist(product);
                  }}
                >
                  Add to wishlist
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-[40vh] lg:w-[45vw] xl:h-[70vh] relative">
              <Skeleton height="100%" />
            </div>
            <div className="w-full lg:w-[35vw] h-auto">
              <Skeleton count={1} height={35} width="60%" />
              <Skeleton
                count={3}
                height={15}
                width="80%"
                style={{ marginTop: "10px" }}
              />
              <Skeleton height={25} width="30%" style={{ marginTop: "20px" }} />
              <Skeleton height={25} width="50%" style={{ marginTop: "10px" }} />
              <Skeleton height={25} width="40%" style={{ marginTop: "10px" }} />
              <Skeleton
                height={40}
                width="100%"
                style={{ marginTop: "20px" }}
              />
              <Skeleton
                height={40}
                width="100%"
                style={{ marginTop: "10px" }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
