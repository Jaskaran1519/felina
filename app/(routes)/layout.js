import React from "react";
import Menu from "../_components/Menu";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const layout = ({ children }) => {
  return (
    <div className="relative">
      <div className="z-100  pb-[5vh] ">
        <Menu />
      </div>
      <div className="absolute top-0 right-[5vw]">
        <Header />
      </div>

      <div className="mt-[5vh]">
        {children}
        <div className="mt-[5vh]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
