"use client";
import React from "react";
import Header from "./Header";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" w-[90%] mx-auto items-center h-auto ">
      <div className=" block md:flex-row-reverse">
        <div className=" float-right w-auto">
          <Header />
        </div>
        <br className="md:hidden" />
        <div className="flex justify-center items-center w-full lg:w-auto lg:justify-start  ">
          <h1 className="font-herofont text-[15vh] mt-[10vh] md:text-[20vh] lg:text-[25vh] xl:text-[40vh] text-orange-900 md:mt-[-3vw]">
            Felina
          </h1>
        </div>
      </div>
      <div className=" flex flex-wrap-reverse justify-center  mt-[-10vh] md:mt-[-15vh] xl:mt-[-35vh] ">
        <div className=" xl:block xl:w-[35%] text-[2vh] text-center mt-[5vh] xl:mt-[30vh]  xl:text-[4vh] text-orange-900 font-herofont font-light">
          <h1>100% Natural Beauty care products</h1>
          <h1>Free shipping all over India</h1>
          <h1>Trending Beauty products</h1>
        </div>
        <Image
          className="w-[45vh] sm:w-[35vh] md:w-[60vh] xl:w-[40%] rounded-b-full"
          src="/main.webp"
          width={300}
          height={300}
          alt="picture"
        />
        <div className="xl:w-[25%] mt-[5vh]   gap-[2vw] items-baseline  w-[50%] hidden xl:flex flex-col  ">
          <video src="/ad.mp4" autoPlay loop muted />
          <button className="bg-orange-900 w-full mx-[10%] py-2 rounded-full text-white hover:bg-orange-800">
            Bestsellers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
