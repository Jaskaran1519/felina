import React from "react";
import Hero from "./_components/Hero";
import Menu from "./_components/Menu";
import Footer from "./_components/Footer";
import Bestseller from "./_components/Bestseller";
const page = () => {
  return (
    <div className=" mx-auto h-auto">
      <div className="bg-orange-200 rounded-b-3xl">
        <div className=" xl:hidden ">
          <Menu />
        </div>
        <Hero />
        <video
          className="w-[90%] h-auto rounded-md mx-auto py-[5vh] "
          src="/ad.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <Bestseller />
      <div className="mt-[5vh]">
        <Footer />
      </div>
    </div>
  );
};

export default page;
